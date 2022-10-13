package operations

import (
	"openapi/pkg/models/shared"
)

type OrdersAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type OrdersAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type OrdersAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OrdersAddRequest struct {
	QueryParams OrdersAddQueryParams
	Headers     OrdersAddHeaders
	Request     shared.Order `request:"mediaType=application/json"`
	Security    OrdersAddSecurity
}

type OrdersAddResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	CreateOrderResponse     *shared.CreateOrderResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
