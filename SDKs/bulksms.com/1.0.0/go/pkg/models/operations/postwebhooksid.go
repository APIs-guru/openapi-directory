package operations

import (
	"openapi/pkg/models/shared"
)

type PostWebhooksIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostWebhooksIDRequest struct {
	PathParams PostWebhooksIDPathParams
	Request    shared.WebhookEntry `request:"mediaType=application/json"`
}

type PostWebhooksIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	Webhook     *shared.Webhook
}
