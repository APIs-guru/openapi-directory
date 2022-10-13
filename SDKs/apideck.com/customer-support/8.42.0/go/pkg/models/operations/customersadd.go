package operations

import (
	"openapi/pkg/models/shared"
)

type CustomersAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type CustomersAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type CustomersAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CustomersAddRequest struct {
	QueryParams CustomersAddQueryParams
	Headers     CustomersAddHeaders
	Request     shared.CustomerSupportCustomer `request:"mediaType=application/json"`
	Security    CustomersAddSecurity
}

type CustomersAddResponse struct {
	BadRequestResponse                    *interface{}
	ContentType                           string
	CreateCustomerSupportCustomerResponse *shared.CreateCustomerSupportCustomerResponse
	NotFoundResponse                      *interface{}
	PaymentRequiredResponse               *interface{}
	StatusCode                            int64
	UnauthorizedResponse                  *interface{}
	UnexpectedErrorResponse               *interface{}
	UnprocessableResponse                 *interface{}
}
