package operations

import (
	"openapi/pkg/models/shared"
)

type ReposTestPushWebhookPathParams struct {
	HookID int64  `pathParam:"style=simple,explode=false,name=hook_id"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposTestPushWebhookRequest struct {
	PathParams ReposTestPushWebhookPathParams
}

type ReposTestPushWebhookResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
