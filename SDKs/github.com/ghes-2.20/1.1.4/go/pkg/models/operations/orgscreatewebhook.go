package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsCreateWebhookPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsCreateWebhookRequestBodyConfig struct {
	ContentType *string      `json:"content_type"`
	InsecureSsl *interface{} `json:"insecure_ssl"`
	Password    *string      `json:"password"`
	Secret      *string      `json:"secret"`
	URL         string       `json:"url"`
	Username    *string      `json:"username"`
}

type OrgsCreateWebhookRequestBody struct {
	Active *bool                              `json:"active"`
	Config OrgsCreateWebhookRequestBodyConfig `json:"config"`
	Events []string                           `json:"events"`
	Name   string                             `json:"name"`
}

type OrgsCreateWebhookRequest struct {
	PathParams OrgsCreateWebhookPathParams
	Request    *OrgsCreateWebhookRequestBody `request:"mediaType=application/json"`
}

type OrgsCreateWebhookResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	BasicError      *shared.BasicError
	OrgHook         *shared.OrgHook
	ValidationError *shared.ValidationError
}
