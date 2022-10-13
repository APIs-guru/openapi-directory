package operations

import (
	"openapi/pkg/models/shared"
)

type OrdersOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OrdersOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type OrdersOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type OrdersOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OrdersOneRequest struct {
	PathParams  OrdersOnePathParams
	QueryParams OrdersOneQueryParams
	Headers     OrdersOneHeaders
	Security    OrdersOneSecurity
}

type OrdersOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetOrderResponse        *shared.GetOrderResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
