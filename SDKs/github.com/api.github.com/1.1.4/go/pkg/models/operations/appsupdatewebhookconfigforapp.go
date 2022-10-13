package operations

import (
	"openapi/pkg/models/shared"
)

type AppsUpdateWebhookConfigForAppRequestBody struct {
	ContentType *string `json:"content_type"`
	InsecureSsl *string `json:"insecure_ssl"`
	Secret      *string `json:"secret"`
	URL         *string `json:"url"`
}

type AppsUpdateWebhookConfigForAppRequest struct {
	Request *AppsUpdateWebhookConfigForAppRequestBody `request:"mediaType=application/json"`
}

type AppsUpdateWebhookConfigForAppResponse struct {
	ContentType   string
	StatusCode    int64
	WebhookConfig *shared.WebhookConfig
}
