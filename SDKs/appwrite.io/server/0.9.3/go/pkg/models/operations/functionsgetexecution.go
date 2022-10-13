package operations

import (
	"openapi/pkg/models/shared"
)

type FunctionsGetExecutionPathParams struct {
	ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
	FunctionID  string `pathParam:"style=simple,explode=false,name=functionId"`
}

type FunctionsGetExecutionSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type FunctionsGetExecutionRequest struct {
	PathParams FunctionsGetExecutionPathParams
	Security   FunctionsGetExecutionSecurity
}

type FunctionsGetExecutionResponse struct {
	ContentType string
	StatusCode  int64
	Execution   *shared.Execution
}
