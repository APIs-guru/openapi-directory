package operations

import (
	"openapi/pkg/models/shared"
)

type ReposUpdateWebhookConfigForRepoPathParams struct {
	HookID int64  `pathParam:"style=simple,explode=false,name=hook_id"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposUpdateWebhookConfigForRepoRequestBody struct {
	ContentType *string      `json:"content_type"`
	InsecureSsl *interface{} `json:"insecure_ssl"`
	Secret      *string      `json:"secret"`
	URL         *string      `json:"url"`
}

type ReposUpdateWebhookConfigForRepoRequest struct {
	PathParams ReposUpdateWebhookConfigForRepoPathParams
	Request    *ReposUpdateWebhookConfigForRepoRequestBody `request:"mediaType=application/json"`
}

type ReposUpdateWebhookConfigForRepoResponse struct {
	ContentType   string
	StatusCode    int64
	WebhookConfig *shared.WebhookConfig
}
