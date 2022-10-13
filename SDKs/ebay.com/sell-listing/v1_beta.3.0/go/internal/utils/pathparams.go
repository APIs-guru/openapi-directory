package utils

import (
	"context"
	"fmt"
	"reflect"
	"strings"
)

const (
	pathParamTagKey = "pathParam"
)

func GenerateURL(ctx context.Context, serverURL, path string, pathParams interface{}) string {
	url := strings.TrimSuffix(serverURL, "/") + path

	pathParamsStructType := reflect.TypeOf(pathParams)
	pathParamsValType := reflect.ValueOf(pathParams)

	parsedParameters := map[string]string{}

	for i := 0; i < pathParamsStructType.NumField(); i++ {
		fieldType := pathParamsStructType.Field(i)
		valType := pathParamsValType.Field(i)

		ppTag := parsePathParamTag(fieldType)
		if ppTag == nil {
			continue
		}

		// TODO: support other styles
		switch ppTag.Style {
		case "simple":
			simpleParams := getSimplePathParams(ctx, ppTag.ParamName, fieldType.Type, valType)
			for k, v := range simpleParams {
				parsedParameters[k] = v
			}
		}
	}

	// TODO should we handle the case where there are no matching path params?
	return ReplaceParameters(url, parsedParameters)
}

func getSimplePathParams(ctx context.Context, parentName string, objType reflect.Type, objValue reflect.Value) map[string]string {
	if objType.Kind() == reflect.Pointer {
		if objValue.IsNil() {
			return nil
		}
		objValue = objValue.Elem()
	}

	pathParams := make(map[string]string)

	pathParams[parentName] = fmt.Sprintf("%v", objValue.Interface())

	return pathParams
}

func parsePathParamTag(field reflect.StructField) *paramTag {
	// example `pathParam:"style=simple,explode=false,name=apiID"`
	values := parseStructTag(pathParamTagKey, field)

	tag := &paramTag{
		Style:     "simple",
		Explode:   false,
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
		}
	}

	return tag
}
