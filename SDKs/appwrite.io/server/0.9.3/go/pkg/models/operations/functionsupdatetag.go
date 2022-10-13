package operations

import (
	"openapi/pkg/models/shared"
)

type FunctionsUpdateTagPathParams struct {
	FunctionID string `pathParam:"style=simple,explode=false,name=functionId"`
}

type FunctionsUpdateTagRequestBody struct {
	Tag string `json:"tag"`
}

type FunctionsUpdateTagSecurity struct {
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type FunctionsUpdateTagRequest struct {
	PathParams FunctionsUpdateTagPathParams
	Request    *FunctionsUpdateTagRequestBody `request:"mediaType=application/json"`
	Security   FunctionsUpdateTagSecurity
}

type FunctionsUpdateTagResponse struct {
	ContentType string
	StatusCode  int64
	Function    *shared.Function
}
