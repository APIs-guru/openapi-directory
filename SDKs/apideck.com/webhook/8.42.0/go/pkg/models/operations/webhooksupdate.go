package operations

import (
	"openapi/pkg/models/shared"
)

type WebhooksUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type WebhooksUpdateHeaders struct {
	XApideckAppID string `header:"name=x-apideck-app-id"`
}

type WebhooksUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type WebhooksUpdateRequest struct {
	PathParams WebhooksUpdatePathParams
	Headers    WebhooksUpdateHeaders
	Request    shared.UpdateWebhookRequest `request:"mediaType=application/json"`
	Security   WebhooksUpdateSecurity
}

type WebhooksUpdateResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
	UpdateWebhookResponse   *shared.UpdateWebhookResponse
}
