package operations

import (
	"openapi/pkg/models/shared"
)

type WebhooksAllQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
}

type WebhooksAllHeaders struct {
	XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

type WebhooksAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type WebhooksAllRequest struct {
	QueryParams WebhooksAllQueryParams
	Headers     WebhooksAllHeaders
	Security    WebhooksAllSecurity
}

type WebhooksAllResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetWebhooksResponse     *shared.GetWebhooksResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
