package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreateWebhookPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposCreateWebhookRequestBodyConfig struct {
	ContentType *string `json:"content_type"`
	Digest      *string `json:"digest"`
	InsecureSsl *string `json:"insecure_ssl"`
	Secret      *string `json:"secret"`
	Token       *string `json:"token"`
	URL         string  `json:"url"`
}

type ReposCreateWebhookRequestBody struct {
	Active *bool                               `json:"active"`
	Config ReposCreateWebhookRequestBodyConfig `json:"config"`
	Events []string                            `json:"events"`
	Name   *string                             `json:"name"`
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
