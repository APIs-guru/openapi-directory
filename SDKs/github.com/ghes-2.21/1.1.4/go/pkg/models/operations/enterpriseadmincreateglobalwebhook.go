package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminCreateGlobalWebhookHeaders struct {
	Accept string `header:"style=simple,explode=false,name=accept"`
}

// EnterpriseAdminCreateGlobalWebhookRequestBodyConfig
// Key/value pairs to provide settings for this webhook.
type EnterpriseAdminCreateGlobalWebhookRequestBodyConfig struct {
	ContentType *string `json:"content_type,omitempty"`
	InsecureSsl *string `json:"insecure_ssl,omitempty"`
	Secret      *string `json:"secret,omitempty"`
	URL         string  `json:"url"`
}

type EnterpriseAdminCreateGlobalWebhookRequestBody struct {
	Active *bool                                               `json:"active,omitempty"`
	Config EnterpriseAdminCreateGlobalWebhookRequestBodyConfig `json:"config"`
	Events []string                                            `json:"events,omitempty"`
	Name   string                                              `json:"name"`
}

type EnterpriseAdminCreateGlobalWebhookRequest struct {
	Headers EnterpriseAdminCreateGlobalWebhookHeaders
	Request *EnterpriseAdminCreateGlobalWebhookRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminCreateGlobalWebhookResponse struct {
	ContentType string
	StatusCode  int64
	GlobalHook  *shared.GlobalHook
}
