package operations

import (
	"openapi/pkg/models/shared"
)

type CustomersOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CustomersOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type CustomersOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type CustomersOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CustomersOneRequest struct {
	PathParams  CustomersOnePathParams
	QueryParams CustomersOneQueryParams
	Headers     CustomersOneHeaders
	Security    CustomersOneSecurity
}

type CustomersOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetCustomerResponse     *shared.GetCustomerResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
