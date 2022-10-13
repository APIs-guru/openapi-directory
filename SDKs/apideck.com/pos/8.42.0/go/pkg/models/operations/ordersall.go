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
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
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
	BadRequestResponse      *interface{}
	ContentType             string
	GetOrdersResponse       *shared.GetOrdersResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
