package operations

import (
	"openapi/pkg/models/shared"
)

type CustomersAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type CustomersAddHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type CustomersAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CustomersAddRequest struct {
	QueryParams CustomersAddQueryParams
	Headers     CustomersAddHeaders
	Request     shared.CustomerSupportCustomerInput `request:"mediaType=application/json"`
	Security    CustomersAddSecurity
}

type CustomersAddResponse struct {
	BadRequestResponse                    *shared.BadRequestResponse
	ContentType                           string
	CreateCustomerSupportCustomerResponse *shared.CreateCustomerSupportCustomerResponse
	NotFoundResponse                      *shared.NotFoundResponse
	PaymentRequiredResponse               *shared.PaymentRequiredResponse
	StatusCode                            int64
	UnauthorizedResponse                  *shared.UnauthorizedResponse
	UnexpectedErrorResponse               *shared.UnexpectedErrorResponse
	UnprocessableResponse                 *shared.UnprocessableResponse
}
