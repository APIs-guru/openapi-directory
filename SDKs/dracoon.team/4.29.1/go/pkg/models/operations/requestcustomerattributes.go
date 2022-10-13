package operations

import (
	"openapi/pkg/models/shared"
)

type RequestCustomerAttributesPathParams struct {
	CustomerID int64 `pathParam:"style=simple,explode=false,name=customer_id"`
}

type RequestCustomerAttributesQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
}

type RequestCustomerAttributesHeaders struct {
	XSdsServiceToken *string `header:"name=X-Sds-Service-Token"`
}

type RequestCustomerAttributesRequest struct {
	PathParams  RequestCustomerAttributesPathParams
	QueryParams RequestCustomerAttributesQueryParams
	Headers     RequestCustomerAttributesHeaders
}

type RequestCustomerAttributesResponse struct {
	AttributesResponse *shared.AttributesResponse
	ContentType        string
	ErrorResponse      *shared.ErrorResponse
	StatusCode         int64
}
