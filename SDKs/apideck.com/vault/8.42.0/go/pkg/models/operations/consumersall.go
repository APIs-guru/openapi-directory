package operations

import (
	"openapi/pkg/models/shared"
)

type ConsumersAllQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
}

type ConsumersAllHeaders struct {
	XApideckAppID string `header:"name=x-apideck-app-id"`
}

type ConsumersAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConsumersAllRequest struct {
	QueryParams ConsumersAllQueryParams
	Headers     ConsumersAllHeaders
	Security    ConsumersAllSecurity
}

type ConsumersAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetConsumersResponse    *shared.GetConsumersResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
