package operations

import (
	"openapi/pkg/models/shared"
)

type ResetWebhookLifetimePathParams struct {
	WebhookID int64 `pathParam:"style=simple,explode=false,name=webhook_id"`
}

type ResetWebhookLifetimeHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type ResetWebhookLifetimeRequest struct {
	PathParams ResetWebhookLifetimePathParams
	Headers    ResetWebhookLifetimeHeaders
}

type ResetWebhookLifetimeResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	Webhook       *shared.Webhook
}
