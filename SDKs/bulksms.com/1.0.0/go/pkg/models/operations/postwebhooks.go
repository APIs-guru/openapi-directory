package operations

import (
	"openapi/pkg/models/shared"
)

type PostWebhooksSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostWebhooksRequest struct {
	Request  shared.WebhookEntry `request:"mediaType=application/json"`
	Security PostWebhooksSecurity
}

type PostWebhooksResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	Webhook     *shared.Webhook
}
