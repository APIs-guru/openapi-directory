package operations

import (
	"openapi/pkg/models/shared"
)

type WebhooksOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type WebhooksOneHeaders struct {
	XApideckAppID string `header:"name=x-apideck-app-id"`
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
	BadRequestResponse      *interface{}
	ContentType             string
	GetWebhookResponse      *shared.GetWebhookResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
