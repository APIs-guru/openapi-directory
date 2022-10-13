package operations

import (
	"openapi/pkg/models/shared"
)

type OrdersDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OrdersDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type OrdersDeleteHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type OrdersDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OrdersDeleteRequest struct {
	PathParams  OrdersDeletePathParams
	QueryParams OrdersDeleteQueryParams
	Headers     OrdersDeleteHeaders
	Security    OrdersDeleteSecurity
}

type OrdersDeleteResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	DeleteOrderResponse     *shared.DeleteOrderResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
