package operations

import (
	"openapi/pkg/models/shared"
)

type ResetTenantWebhookLifetimePathParams struct {
	WebhookID int64 `pathParam:"style=simple,explode=false,name=webhook_id"`
}

type ResetTenantWebhookLifetimeHeaders struct {
	XSdsDateFormat   *interface{} `header:"name=X-Sds-Date-Format"`
	XSdsServiceToken *string      `header:"name=X-Sds-Service-Token"`
}

type ResetTenantWebhookLifetimeRequest struct {
	PathParams ResetTenantWebhookLifetimePathParams
	Headers    ResetTenantWebhookLifetimeHeaders
}

type ResetTenantWebhookLifetimeResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	Webhook       *shared.Webhook
}
