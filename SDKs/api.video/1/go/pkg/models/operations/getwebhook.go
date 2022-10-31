package operations

import (
	"openapi/pkg/models/shared"
)

type GetWebhookPathParams struct {
	WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
}

type GetWebhookSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetWebhookRequest struct {
	PathParams GetWebhookPathParams
	Security   GetWebhookSecurity
}

type GetWebhookResponse struct {
	ContentType string
	StatusCode  int64
	Webhook     *shared.Webhook
}
