package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWebhookPathParams struct {
	WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
}

type DeleteWebhookSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type DeleteWebhookRequest struct {
	PathParams DeleteWebhookPathParams
	Security   DeleteWebhookSecurity
}

type DeleteWebhookResponse struct {
	ContentType string
	StatusCode  int64
	NotFound    *shared.NotFound
}
