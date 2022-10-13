package operations

import (
	"openapi/pkg/models/shared"
)

type OrdersUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OrdersUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type OrdersUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type OrdersUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OrdersUpdateRequest struct {
	PathParams  OrdersUpdatePathParams
	QueryParams OrdersUpdateQueryParams
	Headers     OrdersUpdateHeaders
	Request     shared.Order `request:"mediaType=application/json"`
	Security    OrdersUpdateSecurity
}

type OrdersUpdateResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
	UpdateOrderResponse     *shared.UpdateOrderResponse
}
