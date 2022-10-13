package operations

import (
	"openapi/pkg/models/shared"
)

type PostWebhooksSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type PostWebhooksRequest struct {
	Request  *shared.WebhooksCreatePayload `request:"mediaType=application/json"`
	Security PostWebhooksSecurity
}

type PostWebhooksResponse struct {
	ContentType string
	StatusCode  int64
	BadRequest  *shared.BadRequest
	Webhook     *shared.Webhook
}
