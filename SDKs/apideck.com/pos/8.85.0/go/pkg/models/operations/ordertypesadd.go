package operations

import (
	"openapi/pkg/models/shared"
)

type OrderTypesAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type OrderTypesAddHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type OrderTypesAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OrderTypesAddRequest struct {
	QueryParams OrderTypesAddQueryParams
	Headers     OrderTypesAddHeaders
	Request     shared.OrderTypeInput `request:"mediaType=application/json"`
	Security    OrderTypesAddSecurity
}

type OrderTypesAddResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	CreateOrderTypeResponse *shared.CreateOrderTypeResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
