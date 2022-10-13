package operations

import (
	"openapi/pkg/models/shared"
)

type RequestCustomerPathParams struct {
	CustomerID int64 `pathParam:"style=simple,explode=false,name=customer_id"`
}

type RequestCustomerQueryParams struct {
	IncludeAttributes *bool `queryParam:"style=form,explode=true,name=include_attributes"`
}

type RequestCustomerHeaders struct {
	XSdsDateFormat   *interface{} `header:"name=X-Sds-Date-Format"`
	XSdsServiceToken *string      `header:"name=X-Sds-Service-Token"`
}

type RequestCustomerRequest struct {
	PathParams  RequestCustomerPathParams
	QueryParams RequestCustomerQueryParams
	Headers     RequestCustomerHeaders
}

type RequestCustomerResponse struct {
	ContentType   string
	Customer      *shared.Customer
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
