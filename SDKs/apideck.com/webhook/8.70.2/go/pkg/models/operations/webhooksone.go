package operations

import (
	"openapi/pkg/models/shared"
)

type WebhooksOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type WebhooksOneHeaders struct {
	XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

type WebhooksOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type WebhooksOneRequest struct {
	PathParams WebhooksOnePathParams
	Headers    WebhooksOneHeaders
	Security   WebhooksOneSecurity
}

type WebhooksOneResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetWebhookResponse      *shared.GetWebhookResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
