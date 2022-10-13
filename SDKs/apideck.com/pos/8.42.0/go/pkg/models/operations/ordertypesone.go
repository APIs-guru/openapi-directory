package operations

import (
	"openapi/pkg/models/shared"
)

type OrderTypesOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OrderTypesOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type OrderTypesOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type OrderTypesOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OrderTypesOneRequest struct {
	PathParams  OrderTypesOnePathParams
	QueryParams OrderTypesOneQueryParams
	Headers     OrderTypesOneHeaders
	Security    OrderTypesOneSecurity
}

type OrderTypesOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetOrderTypeResponse    *shared.GetOrderTypeResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
