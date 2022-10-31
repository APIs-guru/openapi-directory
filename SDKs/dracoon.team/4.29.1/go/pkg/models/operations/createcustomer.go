package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCustomerHeaders struct {
	XSdsDateFormat   *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
	XSdsServiceToken *string      `header:"style=simple,explode=false,name=X-Sds-Service-Token"`
}

type CreateCustomerRequest struct {
	Headers CreateCustomerHeaders
	Request shared.NewCustomerRequest `request:"mediaType=application/json"`
}

type CreateCustomerResponse struct {
	ContentType                           string
	ErrorResponse                         *shared.ErrorResponse
	NewCustomerResponse                   *shared.NewCustomerResponse
	StatusCode                            int64
	CreateCustomer400ApplicationJSONOneOf *interface{}
}
