package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminCreateGlobalWebhookHeaders struct {
	Accept string `header:"name=accept"`
}

type EnterpriseAdminCreateGlobalWebhookRequestBodyConfig struct {
	ContentType *string `json:"content_type"`
	InsecureSsl *string `json:"insecure_ssl"`
	Secret      *string `json:"secret"`
	URL         string  `json:"url"`
}

type EnterpriseAdminCreateGlobalWebhookRequestBody struct {
	Active *bool                                               `json:"active"`
	Config EnterpriseAdminCreateGlobalWebhookRequestBodyConfig `json:"config"`
	Events []string                                            `json:"events"`
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
