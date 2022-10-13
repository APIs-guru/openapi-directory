package operations

import (
	"openapi/pkg/models/shared"
)

type GetWebhooksSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetWebhooksRequest struct {
	Security GetWebhooksSecurity
}

type GetWebhooksResponse struct {
	ContentType string
	StatusCode  int64
	Webhooks    []shared.Webhook
}
