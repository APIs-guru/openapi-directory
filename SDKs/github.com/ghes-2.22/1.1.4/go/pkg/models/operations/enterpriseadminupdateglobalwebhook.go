package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminUpdateGlobalWebhookPathParams struct {
	HookID int64 `pathParam:"style=simple,explode=false,name=hook_id"`
}

type EnterpriseAdminUpdateGlobalWebhookHeaders struct {
	Accept string `header:"name=accept"`
}

type EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig struct {
	ContentType *string `json:"content_type"`
	InsecureSsl *string `json:"insecure_ssl"`
	Secret      *string `json:"secret"`
	URL         string  `json:"url"`
}

type EnterpriseAdminUpdateGlobalWebhookRequestBody struct {
	Active *bool                                                `json:"active"`
	Config *EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig `json:"config"`
	Events []string                                             `json:"events"`
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
