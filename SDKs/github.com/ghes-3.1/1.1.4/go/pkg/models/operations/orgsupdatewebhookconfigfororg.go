package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsUpdateWebhookConfigForOrgPathParams struct {
	HookID int64  `pathParam:"style=simple,explode=false,name=hook_id"`
	Org    string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsUpdateWebhookConfigForOrgRequestBody struct {
	ContentType *string      `json:"content_type"`
	InsecureSsl *interface{} `json:"insecure_ssl"`
	Secret      *string      `json:"secret"`
	URL         *string      `json:"url"`
}

type OrgsUpdateWebhookConfigForOrgRequest struct {
	PathParams OrgsUpdateWebhookConfigForOrgPathParams
	Request    *OrgsUpdateWebhookConfigForOrgRequestBody `request:"mediaType=application/json"`
}

type OrgsUpdateWebhookConfigForOrgResponse struct {
	ContentType   string
	StatusCode    int64
	WebhookConfig *shared.WebhookConfig
}
