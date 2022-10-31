package operations

import (
	"openapi/pkg/models/shared"
)

type CustomersUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CustomersUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type CustomersUpdateHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type CustomersUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CustomersUpdateRequest struct {
	PathParams  CustomersUpdatePathParams
	QueryParams CustomersUpdateQueryParams
	Headers     CustomersUpdateHeaders
	Request     shared.CustomerSupportCustomer `request:"mediaType=application/json"`
	Security    CustomersUpdateSecurity
}

type CustomersUpdateResponse struct {
	BadRequestResponse                    *shared.BadRequestResponse
	ContentType                           string
	NotFoundResponse                      *shared.NotFoundResponse
	PaymentRequiredResponse               *shared.PaymentRequiredResponse
	StatusCode                            int64
	UnauthorizedResponse                  *shared.UnauthorizedResponse
	UnexpectedErrorResponse               *shared.UnexpectedErrorResponse
	UnprocessableResponse                 *shared.UnprocessableResponse
	UpdateCustomerSupportCustomerResponse *shared.UpdateCustomerSupportCustomerResponse
}
