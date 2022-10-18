package utils

import (
	"fmt"
	"net/http"
	"reflect"
	"strings"
)

const (
	securityTagKey = "security"
)

type securityTag struct {
	Option  bool
	Scheme  bool
	Name    string
	Type    string
	SubType string
}

type SecurityClient struct {
	client      *http.Client
	headers     map[string]string
	queryParams map[string]string
}

func newSecurityClient() *SecurityClient {
	return &SecurityClient{
		client:      http.DefaultClient,
		headers:     make(map[string]string),
		queryParams: make(map[string]string),
	}
}

func (c *SecurityClient) Do(req *http.Request) (*http.Response, error) {
	for k, v := range c.headers {
		req.Header.Set(k, v)
	}

	queryParams := req.URL.Query()

	for k, v := range c.queryParams {
		queryParams.Set(k, v)
	}

	req.URL.RawQuery = queryParams.Encode()

	return c.client.Do(req)
}

func CreateSecurityClient(security interface{}) *SecurityClient {
	client := parseSecurityStruct(security)
	if client != nil {
		return client
	}

	return newSecurityClient()
}

func parseSecurityStruct(security interface{}) *SecurityClient {
	securityStructType := reflect.TypeOf(security)
	securityValType := reflect.ValueOf(security)

	for i := 0; i < securityStructType.NumField(); i++ {
		fieldType := securityStructType.Field(i)
		valType := securityValType.Field(i)

		if fieldType.Type.Kind() == reflect.Pointer && valType.Elem().IsNil() {
			continue
		}

		secTag := parseSecurityTag(fieldType)
		if secTag != nil {
			if secTag.Option {
				return parseSecurityOption(valType.Interface())
			} else if secTag.Scheme {
				client := newSecurityClient()
				parseSecurityScheme(client, secTag, valType.Interface())
				return client
			}
		}
	}

	return nil
}

func parseSecurityOption(option interface{}) *SecurityClient {
	optionStructType := reflect.TypeOf(option)
	optionValType := reflect.ValueOf(option)

	client := newSecurityClient()

	for i := 0; i < optionStructType.NumField(); i++ {
		fieldType := optionStructType.Field(i)
		valType := optionValType.Field(i)

		secTag := parseSecurityTag(fieldType)
		if secTag != nil && secTag.Scheme {
			parseSecurityScheme(client, secTag, valType.Interface())
		}
	}

	return client
}

func parseSecurityScheme(client *SecurityClient, schemeTag *securityTag, scheme interface{}) {
	schemeStructType := reflect.TypeOf(scheme)
	schemeValType := reflect.ValueOf(scheme)

	for i := 0; i < schemeStructType.NumField(); i++ {
		fieldType := schemeStructType.Field(i)
		valType := schemeValType.Field(i)

		secTag := parseSecurityTag(fieldType)
		if secTag == nil || secTag.Name == "" {
			continue
		}

		switch schemeTag.Type {
		case "apiKey":
			switch schemeTag.SubType {
			case "header":
				client.headers[secTag.Name] = valType.String()
			case "query":
				client.queryParams[secTag.Name] = valType.String()
			case "cookie":
				client.headers["Cookie"] = fmt.Sprintf("%s=%s", secTag.Name, valType.String())
			default:
				panic("not supported")
			}
		case "openIdConnect":
			client.headers[secTag.Name] = valType.String()
		case "oauth2":
			client.headers[secTag.Name] = valType.String()
		case "http":
			switch schemeTag.SubType {
			case "basic":
			case "bearer":
				client.headers[secTag.Name] = valType.String()
			default:
				panic("not supported")
			}
		default:
			panic("not supported")
		}
	}
}

func parseSecurityTag(field reflect.StructField) *securityTag {
	tag := field.Tag.Get(securityTagKey)
	if tag == "" {
		return nil
	}

	option := false
	scheme := false
	name := ""
	securityType := ""
	securitySubType := ""

	options := strings.Split(tag, ",")
	for _, optionConf := range options {
		parts := strings.Split(optionConf, "=")
		if len(parts) < 1 || len(parts) > 2 {
			continue
		}

		switch parts[0] {
		case "name":
			name = parts[1]
		case "type":
			securityType = parts[1]
		case "subtype":
			securitySubType = parts[1]
		case "option":
			option = true
		case "scheme":
			scheme = true
		}
	}

	// TODO: validate tag?

	return &securityTag{
		Option:  option,
		Scheme:  scheme,
		Name:    name,
		Type:    securityType,
		SubType: securitySubType,
	}
}
