package operations

import (
	"openapi/pkg/models/shared"
)

type ReposDeleteWebhookPathParams struct {
	HookID int64  `pathParam:"style=simple,explode=false,name=hook_id"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposDeleteWebhookRequest struct {
	PathParams ReposDeleteWebhookPathParams
}

type ReposDeleteWebhookResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
