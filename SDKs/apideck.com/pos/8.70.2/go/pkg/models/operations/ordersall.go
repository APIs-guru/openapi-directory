package operations

import (
	"openapi/pkg/models/shared"
)

type OrdersAllQueryParams struct {
	Cursor     *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit      *int64  `queryParam:"style=form,explode=true,name=limit"`
	LocationID *string `queryParam:"style=form,explode=true,name=location_id"`
	Raw        *bool   `queryParam:"style=form,explode=true,name=raw"`
}

type OrdersAllHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type OrdersAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OrdersAllRequest struct {
	QueryParams OrdersAllQueryParams
	Headers     OrdersAllHeaders
	Security    OrdersAllSecurity
}

type OrdersAllResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetOrdersResponse       *shared.GetOrdersResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
