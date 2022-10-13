package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsGetWebhookConfigForOrgPathParams struct {
	HookID int64  `pathParam:"style=simple,explode=false,name=hook_id"`
	Org    string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsGetWebhookConfigForOrgRequest struct {
	PathParams OrgsGetWebhookConfigForOrgPathParams
}

type OrgsGetWebhookConfigForOrgResponse struct {
	ContentType   string
	StatusCode    int64
	WebhookConfig *shared.WebhookConfig
}
