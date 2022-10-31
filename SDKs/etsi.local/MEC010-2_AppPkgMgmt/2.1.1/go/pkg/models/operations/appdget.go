package operations

import (
	"openapi/pkg/models/shared"
)

type AppDgetPathParams struct {
	AppDID string `pathParam:"style=simple,explode=false,name=appDId"`
}

type AppDgetQueryParams struct {
	AllFields      *string `queryParam:"style=form,explode=true,name=all_fields"`
	ExcludeDefault *string `queryParam:"style=form,explode=true,name=exclude_default"`
	ExcludeFields  *string `queryParam:"style=form,explode=true,name=exclude_fields"`
	Fields         *string `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string `queryParam:"style=form,explode=true,name=filter"`
}

type AppDgetRequest struct {
	PathParams  AppDgetPathParams
	QueryParams AppDgetQueryParams
}

type AppDgetResponse struct {
	Body           []byte
	ContentType    string
	ProblemDetails *shared.ProblemDetails
	StatusCode     int64
}
