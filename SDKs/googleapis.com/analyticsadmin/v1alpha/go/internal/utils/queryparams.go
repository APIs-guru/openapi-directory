package utils

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"reflect"
	"strings"
)

const (
	queryParamTagKey = "queryParam"
)

func PopulateQueryParams(ctx context.Context, req *http.Request, queryParams interface{}) {
	queryParamsStructType := reflect.TypeOf(queryParams)
	queryParamsValType := reflect.ValueOf(queryParams)

	for i := 0; i < queryParamsStructType.NumField(); i++ {
		fieldType := queryParamsStructType.Field(i)
		valType := queryParamsValType.Field(i)

		qpTag := parseQueryParamTag(fieldType)
		if qpTag == nil {
			continue
		}

		if qpTag.Serialization != "" {
			populateSerializedParams(req, qpTag, fieldType.Type, valType)
		} else {
			// TODO: support other styles
			switch qpTag.Style {
			case "deepObject":
				populateDeepObjectParams(req, qpTag, fieldType.Type, valType)
			case "form":
				populateFormParams(req, qpTag, fieldType.Type, valType)
			}
		}
	}
}

func populateSerializedParams(req *http.Request, tag *paramTag, objType reflect.Type, objValue reflect.Value) {
	switch tag.Serialization {
	case "json":
		data, err := json.Marshal(objValue.Interface())
		if err != nil {
			fmt.Printf("error marshaling json: %v", err) // TODO support logging and returning error?
			return
		}

		queryParams := req.URL.Query()

		queryParams.Add(tag.ParamName, string(data))

		req.URL.RawQuery = queryParams.Encode()
	}
}

func populateDeepObjectParams(req *http.Request, tag *paramTag, objType reflect.Type, objValue reflect.Value) {
	if objType.Kind() == reflect.Pointer {
		if objValue.IsNil() {
			return
		}
		objType = objType.Elem()
		objValue = objValue.Elem()
	}

	queryParams := req.URL.Query()

	switch objType.Kind() {
	case reflect.Struct:
		for i := 0; i < objType.NumField(); i++ {
			fieldType := objType.Field(i)
			valType := objValue.Field(i)

			qpTag := parseQueryParamTag(fieldType)
			if qpTag == nil {
				continue
			}

			queryParams.Add(fmt.Sprintf("%s[%s]", tag.ParamName, qpTag.ParamName), fmt.Sprintf("%v", valType.Interface()))
		}
	case reflect.Map:
		iter := objValue.MapRange()
		for iter.Next() {
			switch iter.Value().Kind() {
			case reflect.Array, reflect.Slice:
				for i := 0; i < iter.Value().Len(); i++ {
					queryParams.Add(fmt.Sprintf("%s[%s]", tag.ParamName, iter.Key().String()), fmt.Sprintf("%v", iter.Value().Index(i).Interface()))
				}
			default:
				queryParams.Add(fmt.Sprintf("%s[%s]", tag.ParamName, iter.Key().String()), fmt.Sprintf("%v", iter.Value().Interface()))
			}
		}
	}

	req.URL.RawQuery = queryParams.Encode()
}

func populateFormParams(req *http.Request, tag *paramTag, objType reflect.Type, objValue reflect.Value) {
	queryParams := populateForm(tag.ParamName, tag.Explode, objType, objValue, func(fieldType reflect.StructField) string {
		qpTag := parseQueryParamTag(fieldType)
		if qpTag == nil {
			return ""
		}

		return qpTag.ParamName
	})

	req.URL.RawQuery = queryParams.Encode()
}

type paramTag struct {
	Style         string
	Explode       bool
	ParamName     string
	Serialization string
}

func parseQueryParamTag(field reflect.StructField) *paramTag {
	// example `queryParam:"style=deepObject,explode=true,name=op"`
	values := parseStructTag(queryParamTagKey, field)

	tag := &paramTag{
		Style:     "form",
		Explode:   true,
		ParamName: strings.ToLower(field.Name),
	}

	for k, v := range values {
		switch k {
		case "style":
			tag.Style = v
		case "explode":
			tag.Explode = v == "true"
		case "name":
			tag.ParamName = v
		case "serialization":
			tag.Serialization = v
		}
	}

	return tag
}
