package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCustomerAttributesPathParams struct {
	CustomerID int64 `pathParam:"style=simple,explode=false,name=customer_id"`
}

type UpdateCustomerAttributesHeaders struct {
	XSdsDateFormat   *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
	XSdsServiceToken *string      `header:"style=simple,explode=false,name=X-Sds-Service-Token"`
}

type UpdateCustomerAttributesRequest struct {
	PathParams UpdateCustomerAttributesPathParams
	Headers    UpdateCustomerAttributesHeaders
	Request    shared.CustomerAttributes `request:"mediaType=application/json"`
}

type UpdateCustomerAttributesResponse struct {
	ContentType   string
	Customer      *shared.Customer
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
