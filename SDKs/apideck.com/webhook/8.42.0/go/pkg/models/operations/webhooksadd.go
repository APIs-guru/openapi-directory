package operations

import (
	"openapi/pkg/models/shared"
)

type WebhooksAddHeaders struct {
	XApideckAppID string `header:"name=x-apideck-app-id"`
}

type WebhooksAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type WebhooksAddRequest struct {
	Headers  WebhooksAddHeaders
	Request  shared.CreateWebhookRequest `request:"mediaType=application/json"`
	Security WebhooksAddSecurity
}

type WebhooksAddResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	CreateWebhookResponse   *shared.CreateWebhookResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
