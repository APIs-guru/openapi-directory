package operations

import (
	"openapi/pkg/models/shared"
)

type FunctionsDeleteTagPathParams struct {
	FunctionID string `pathParam:"style=simple,explode=false,name=functionId"`
	TagID      string `pathParam:"style=simple,explode=false,name=tagId"`
}

type FunctionsDeleteTagSecurity struct {
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type FunctionsDeleteTagRequest struct {
	PathParams FunctionsDeleteTagPathParams
	Security   FunctionsDeleteTagSecurity
}

type FunctionsDeleteTagResponse struct {
	ContentType string
	StatusCode  int64
}
