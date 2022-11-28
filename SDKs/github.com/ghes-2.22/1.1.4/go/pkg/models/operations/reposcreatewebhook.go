package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreateWebhookPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

// ReposCreateWebhookRequestBodyConfig
// Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@2.22/rest/reference/repos#create-hook-config-params).
type ReposCreateWebhookRequestBodyConfig struct {
	ContentType *string      `json:"content_type,omitempty"`
	Digest      *string      `json:"digest,omitempty"`
	InsecureSsl *interface{} `json:"insecure_ssl,omitempty"`
	Secret      *string      `json:"secret,omitempty"`
	Token       *string      `json:"token,omitempty"`
	URL         *string      `json:"url,omitempty"`
}

type ReposCreateWebhookRequestBody struct {
	Active *bool                                `json:"active,omitempty"`
	Config *ReposCreateWebhookRequestBodyConfig `json:"config,omitempty"`
	Events []string                             `json:"events,omitempty"`
	Name   *string                              `json:"name,omitempty"`
}

type ReposCreateWebhookRequest struct {
	PathParams ReposCreateWebhookPathParams
	Request    *ReposCreateWebhookRequestBody `request:"mediaType=application/json"`
}

type ReposCreateWebhookResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	BasicError      *shared.BasicError
	Hook            *shared.Hook
	ValidationError *shared.ValidationError
}
