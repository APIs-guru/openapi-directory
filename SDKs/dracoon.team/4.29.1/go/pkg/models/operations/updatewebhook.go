package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWebhookPathParams struct {
	WebhookID int64 `pathParam:"style=simple,explode=false,name=webhook_id"`
}

type UpdateWebhookHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type UpdateWebhookRequest struct {
	PathParams UpdateWebhookPathParams
	Headers    UpdateWebhookHeaders
	Request    shared.UpdateWebhookRequest `request:"mediaType=application/json"`
}

type UpdateWebhookResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	Webhook       *shared.Webhook
}
