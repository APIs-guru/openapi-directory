package operations

import (
	"openapi/pkg/models/shared"
)

type OrderTypesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OrderTypesUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type OrderTypesUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type OrderTypesUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OrderTypesUpdateRequest struct {
	PathParams  OrderTypesUpdatePathParams
	QueryParams OrderTypesUpdateQueryParams
	Headers     OrderTypesUpdateHeaders
	Request     shared.OrderType `request:"mediaType=application/json"`
	Security    OrderTypesUpdateSecurity
}

type OrderTypesUpdateResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
	UpdateOrderTypeResponse *shared.UpdateOrderTypeResponse
}
