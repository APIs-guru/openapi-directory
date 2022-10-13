package operations

import (
	"openapi/pkg/models/shared"
)

type ReposUpdateWebhookPathParams struct {
	HookID int64  `pathParam:"style=simple,explode=false,name=hook_id"`
	Owner  string `pathParam:"style=simple,explode=false,name=owner"`
	Repo   string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposUpdateWebhookRequestBodyConfig struct {
	Address     *string `json:"address"`
	ContentType *string `json:"content_type"`
	InsecureSsl *string `json:"insecure_ssl"`
	Room        *string `json:"room"`
	Secret      *string `json:"secret"`
	URL         string  `json:"url"`
}

type ReposUpdateWebhookRequestBody struct {
	Active       *bool                                `json:"active"`
	AddEvents    []string                             `json:"add_events"`
	Config       *ReposUpdateWebhookRequestBodyConfig `json:"config"`
	Events       []string                             `json:"events"`
	RemoveEvents []string                             `json:"remove_events"`
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
