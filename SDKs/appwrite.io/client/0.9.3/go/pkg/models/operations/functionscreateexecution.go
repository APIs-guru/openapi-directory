package operations

import (
	"openapi/pkg/models/shared"
)

type FunctionsCreateExecutionPathParams struct {
	FunctionID string `pathParam:"style=simple,explode=false,name=functionId"`
}

type FunctionsCreateExecutionRequestBody struct {
	Data *string `json:"data,omitempty"`
}

type FunctionsCreateExecutionSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type FunctionsCreateExecutionRequest struct {
	PathParams FunctionsCreateExecutionPathParams
	Request    *FunctionsCreateExecutionRequestBody `request:"mediaType=application/json"`
	Security   FunctionsCreateExecutionSecurity
}

type FunctionsCreateExecutionResponse struct {
	ContentType string
	StatusCode  int64
	Execution   *shared.Execution
}
