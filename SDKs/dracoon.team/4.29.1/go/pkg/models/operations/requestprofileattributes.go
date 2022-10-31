package operations

import (
	"openapi/pkg/models/shared"
)

type RequestProfileAttributesQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
}

type RequestProfileAttributesHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RequestProfileAttributesRequest struct {
	QueryParams RequestProfileAttributesQueryParams
	Headers     RequestProfileAttributesHeaders
}

type RequestProfileAttributesResponse struct {
	AttributesResponse *shared.AttributesResponse
	ContentType        string
	ErrorResponse      *shared.ErrorResponse
	StatusCode         int64
}
