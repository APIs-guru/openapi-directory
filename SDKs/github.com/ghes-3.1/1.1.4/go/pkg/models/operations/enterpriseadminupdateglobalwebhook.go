package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminUpdateGlobalWebhookPathParams struct {
	HookID int64 `pathParam:"style=simple,explode=false,name=hook_id"`
}

type EnterpriseAdminUpdateGlobalWebhookHeaders struct {
	Accept string `header:"style=simple,explode=false,name=accept"`
}

type EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig struct {
	ContentType *string `json:"content_type,omitempty"`
	InsecureSsl *string `json:"insecure_ssl,omitempty"`
	Secret      *string `json:"secret,omitempty"`
	URL         string  `json:"url"`
}

type EnterpriseAdminUpdateGlobalWebhookRequestBody struct {
	Active *bool                                                `json:"active,omitempty"`
	Config *EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig `json:"config,omitempty"`
	Events []string                                             `json:"events,omitempty"`
}

type EnterpriseAdminUpdateGlobalWebhookRequest struct {
	PathParams EnterpriseAdminUpdateGlobalWebhookPathParams
	Headers    EnterpriseAdminUpdateGlobalWebhookHeaders
	Request    *EnterpriseAdminUpdateGlobalWebhookRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminUpdateGlobalWebhookResponse struct {
	ContentType string
	StatusCode  int64
	GlobalHook2 *shared.GlobalHook2
}
