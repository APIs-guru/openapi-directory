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
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type CustomersUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CustomersUpdateRequest struct {
	PathParams  CustomersUpdatePathParams
	QueryParams CustomersUpdateQueryParams
	Headers     CustomersUpdateHeaders
	Request     shared.AccountingCustomer `request:"mediaType=application/json"`
	Security    CustomersUpdateSecurity
}

type CustomersUpdateResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
	UpdateCustomerResponse  *shared.UpdateCustomerResponse
}
