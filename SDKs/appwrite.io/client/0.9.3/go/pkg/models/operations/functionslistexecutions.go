package operations

import (
	"openapi/pkg/models/shared"
)

type FunctionsListExecutionsPathParams struct {
	FunctionID string `pathParam:"style=simple,explode=false,name=functionId"`
}

type FunctionsListExecutionsQueryParams struct {
	Limit     *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset    *int32  `queryParam:"style=form,explode=true,name=offset"`
	OrderType *string `queryParam:"style=form,explode=true,name=orderType"`
	Search    *string `queryParam:"style=form,explode=true,name=search"`
}

type FunctionsListExecutionsSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type FunctionsListExecutionsRequest struct {
	PathParams  FunctionsListExecutionsPathParams
	QueryParams FunctionsListExecutionsQueryParams
	Security    FunctionsListExecutionsSecurity
}

type FunctionsListExecutionsResponse struct {
	ContentType   string
	StatusCode    int64
	ExecutionList *shared.ExecutionList
}
