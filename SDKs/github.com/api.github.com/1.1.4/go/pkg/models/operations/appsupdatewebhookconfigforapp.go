package operations

import (
	"openapi/pkg/models/shared"
)

type AppsUpdateWebhookConfigForAppRequestBody struct {
	ContentType *string `json:"content_type,omitempty"`
	InsecureSsl *string `json:"insecure_ssl,omitempty"`
	Secret      *string `json:"secret,omitempty"`
	URL         *string `json:"url,omitempty"`
}

type AppsUpdateWebhookConfigForAppRequest struct {
	Request *AppsUpdateWebhookConfigForAppRequestBody `request:"mediaType=application/json"`
}

type AppsUpdateWebhookConfigForAppResponse struct {
	ContentType   string
	StatusCode    int64
	WebhookConfig *shared.WebhookConfig
}
