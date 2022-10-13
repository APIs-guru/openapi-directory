package operations

import (
	"openapi/pkg/models/shared"
)

type RequestWebhookPathParams struct {
	WebhookID int64 `pathParam:"style=simple,explode=false,name=webhook_id"`
}

type RequestWebhookHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type RequestWebhookRequest struct {
	PathParams RequestWebhookPathParams
	Headers    RequestWebhookHeaders
}

type RequestWebhookResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	Webhook       *shared.Webhook
}
