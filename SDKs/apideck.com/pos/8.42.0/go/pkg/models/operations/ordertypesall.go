package operations

import (
	"openapi/pkg/models/shared"
)

type OrderTypesAllQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool   `queryParam:"style=form,explode=true,name=raw"`
}

type OrderTypesAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type OrderTypesAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OrderTypesAllRequest struct {
	QueryParams OrderTypesAllQueryParams
	Headers     OrderTypesAllHeaders
	Security    OrderTypesAllSecurity
}

type OrderTypesAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetOrderTypesResponse   *shared.GetOrderTypesResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
