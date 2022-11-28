package operations

import (
	"openapi/pkg/models/shared"
)

type ReposUpdateWebhookPathParams struct {
	HookID int64  `pathParam:"style=simple,explode=false,name=hook_id"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

// ReposUpdateWebhookRequestBodyConfig
// Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/repos#create-hook-config-params).
type ReposUpdateWebhookRequestBodyConfig struct {
	Address     *string `json:"address,omitempty"`
	ContentType *string `json:"content_type,omitempty"`
	InsecureSsl *string `json:"insecure_ssl,omitempty"`
	Room        *string `json:"room,omitempty"`
	Secret      *string `json:"secret,omitempty"`
	URL         string  `json:"url"`
}

type ReposUpdateWebhookRequestBody struct {
	Active       *bool                                `json:"active,omitempty"`
	AddEvents    []string                             `json:"add_events,omitempty"`
	Config       *ReposUpdateWebhookRequestBodyConfig `json:"config,omitempty"`
	Events       []string                             `json:"events,omitempty"`
	RemoveEvents []string                             `json:"remove_events,omitempty"`
}

type ReposUpdateWebhookRequest struct {
	PathParams ReposUpdateWebhookPathParams
	Request    *ReposUpdateWebhookRequestBody `request:"mediaType=application/json"`
}

type ReposUpdateWebhookResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	Hook            *shared.Hook
	ValidationError *shared.ValidationError
}
