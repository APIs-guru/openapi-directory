package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsDeleteWebhookPathParams struct {
	HookID int64  `pathParam:"style=simple,explode=false,name=hook_id"`
	Org    string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsDeleteWebhookRequest struct {
	PathParams OrgsDeleteWebhookPathParams
}

type OrgsDeleteWebhookResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
