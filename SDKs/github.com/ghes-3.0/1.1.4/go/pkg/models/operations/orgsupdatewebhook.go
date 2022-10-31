package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsUpdateWebhookPathParams struct {
	HookID int64  `pathParam:"style=simple,explode=false,name=hook_id"`
	Org    string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsUpdateWebhookRequestBodyConfig struct {
	ContentType *string      `json:"content_type,omitempty"`
	InsecureSsl *interface{} `json:"insecure_ssl,omitempty"`
	Secret      *string      `json:"secret,omitempty"`
	URL         string       `json:"url"`
}

type OrgsUpdateWebhookRequestBody struct {
	Active *bool                               `json:"active,omitempty"`
	Config *OrgsUpdateWebhookRequestBodyConfig `json:"config,omitempty"`
	Events []string                            `json:"events,omitempty"`
	Name   *string                             `json:"name,omitempty"`
}

type OrgsUpdateWebhookRequest struct {
	PathParams OrgsUpdateWebhookPathParams
	Request    *OrgsUpdateWebhookRequestBody `request:"mediaType=application/json"`
}

type OrgsUpdateWebhookResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	OrgHook         *shared.OrgHook
	ValidationError *shared.ValidationError
}
