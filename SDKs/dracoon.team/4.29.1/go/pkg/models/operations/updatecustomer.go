package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCustomerPathParams struct {
	CustomerID int64 `pathParam:"style=simple,explode=false,name=customer_id"`
}

type UpdateCustomerHeaders struct {
	XSdsDateFormat   *interface{} `header:"name=X-Sds-Date-Format"`
	XSdsServiceToken *string      `header:"name=X-Sds-Service-Token"`
}

type UpdateCustomerRequest struct {
	PathParams UpdateCustomerPathParams
	Headers    UpdateCustomerHeaders
	Request    shared.UpdateCustomerRequest `request:"mediaType=application/json"`
}

type UpdateCustomerResponse struct {
	ContentType            string
	ErrorResponse          *shared.ErrorResponse
	StatusCode             int64
	UpdateCustomerResponse *shared.UpdateCustomerResponse
}
