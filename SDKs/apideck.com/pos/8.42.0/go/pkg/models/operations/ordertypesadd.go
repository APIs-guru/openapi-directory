package operations

import (
	"openapi/pkg/models/shared"
)

type OrderTypesAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type OrderTypesAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type OrderTypesAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OrderTypesAddRequest struct {
	QueryParams OrderTypesAddQueryParams
	Headers     OrderTypesAddHeaders
	Request     shared.OrderType `request:"mediaType=application/json"`
	Security    OrderTypesAddSecurity
}

type OrderTypesAddResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	CreateOrderTypeResponse *shared.CreateOrderTypeResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
