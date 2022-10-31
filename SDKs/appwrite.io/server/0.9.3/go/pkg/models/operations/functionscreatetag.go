package operations

import (
	"openapi/pkg/models/shared"
)

type FunctionsCreateTagPathParams struct {
	FunctionID string `pathParam:"style=simple,explode=false,name=functionId"`
}

type FunctionsCreateTagRequestBody struct {
	Code    string `multipartForm:"name=code"`
	Command string `multipartForm:"name=command"`
}

type FunctionsCreateTagSecurity struct {
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type FunctionsCreateTagRequest struct {
	PathParams FunctionsCreateTagPathParams
	Request    *FunctionsCreateTagRequestBody `request:"mediaType=multipart/form-data"`
	Security   FunctionsCreateTagSecurity
}

type FunctionsCreateTagResponse struct {
	ContentType string
	StatusCode  int64
	Tag         *shared.Tag
}
