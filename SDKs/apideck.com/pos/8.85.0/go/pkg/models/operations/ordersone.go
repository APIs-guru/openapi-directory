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
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
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
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetOrderResponse        *shared.GetOrderResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
