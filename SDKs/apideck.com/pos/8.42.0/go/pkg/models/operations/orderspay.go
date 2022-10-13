package operations

import (
	"openapi/pkg/models/shared"
)

type OrdersPayPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OrdersPayQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type OrdersPayHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type OrdersPaySecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OrdersPayRequest struct {
	PathParams  OrdersPayPathParams
	QueryParams OrdersPayQueryParams
	Headers     OrdersPayHeaders
	Request     shared.Order `request:"mediaType=application/json"`
	Security    OrdersPaySecurity
}

type OrdersPayResponse struct {
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
