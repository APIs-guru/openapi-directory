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
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetConsumersResponse    *shared.GetConsumersResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
