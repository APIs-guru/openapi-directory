package shared

import (
	"time"
)

type WebhookResponseFilters struct {
	Action          *string  `json:"action"`
	Fields          []string `json:"fields"`
	ResourceSubtype *string  `json:"resource_subtype"`
	ResourceType    *string  `json:"resource_type"`
}

type WebhookResponse struct {
	Active             *bool                    `json:"active"`
	CreatedAt          *time.Time               `json:"created_at"`
	Filters            []WebhookResponseFilters `json:"filters"`
	Gid                *string                  `json:"gid"`
	LastFailureAt      *time.Time               `json:"last_failure_at"`
	LastFailureContent *string                  `json:"last_failure_content"`
	LastSuccessAt      *time.Time               `json:"last_success_at"`
	Resource           *AsanaNamedResource      `json:"resource"`
	ResourceType       *string                  `json:"resource_type"`
	Target             *string                  `json:"target"`
}
