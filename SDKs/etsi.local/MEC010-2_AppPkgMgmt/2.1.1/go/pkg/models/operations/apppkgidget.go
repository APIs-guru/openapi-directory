package operations

import (
	"openapi/pkg/models/shared"
)

type AppPkgIDGetPathParams struct {
	AppPkgID string `pathParam:"style=simple,explode=false,name=appPkgId"`
}

type AppPkgIDGetQueryParams struct {
	AllFields      *string `queryParam:"style=form,explode=true,name=all_fields"`
	ExcludeDefault *string `queryParam:"style=form,explode=true,name=exclude_default"`
	ExcludeFields  *string `queryParam:"style=form,explode=true,name=exclude_fields"`
	Fields         *string `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string `queryParam:"style=form,explode=true,name=filter"`
}

type AppPkgIDGetRequest struct {
	PathParams  AppPkgIDGetPathParams
	QueryParams AppPkgIDGetQueryParams
}

type AppPkgIDGetResponse struct {
	Body           []byte
	ContentType    string
	ProblemDetails *shared.ProblemDetails
	StatusCode     int64
}
