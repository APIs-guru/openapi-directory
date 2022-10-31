package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTenantWebhookPathParams struct {
	WebhookID int64 `pathParam:"style=simple,explode=false,name=webhook_id"`
}

type UpdateTenantWebhookHeaders struct {
	XSdsDateFormat   *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
	XSdsServiceToken *string      `header:"style=simple,explode=false,name=X-Sds-Service-Token"`
}

type UpdateTenantWebhookRequest struct {
	PathParams UpdateTenantWebhookPathParams
	Headers    UpdateTenantWebhookHeaders
	Request    shared.UpdateWebhookRequest `request:"mediaType=application/json"`
}

type UpdateTenantWebhookResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	Webhook       *shared.Webhook
}
