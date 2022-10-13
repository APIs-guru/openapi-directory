package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveWebhookPathParams struct {
	WebhookID int64 `pathParam:"style=simple,explode=false,name=webhook_id"`
}

type RemoveWebhookHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RemoveWebhookRequest struct {
	PathParams RemoveWebhookPathParams
	Headers    RemoveWebhookHeaders
}

type RemoveWebhookResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
