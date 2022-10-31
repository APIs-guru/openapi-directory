package shared

import (
	"time"
)

type WebhookResponseFilters struct {
	Action          *string  `json:"action,omitempty"`
	Fields          []string `json:"fields,omitempty"`
	ResourceSubtype *string  `json:"resource_subtype,omitempty"`
	ResourceType    *string  `json:"resource_type,omitempty"`
}

type WebhookResponse struct {
	Active             *bool                    `json:"active,omitempty"`
	CreatedAt          *time.Time               `json:"created_at,omitempty"`
	Filters            []WebhookResponseFilters `json:"filters,omitempty"`
	Gid                *string                  `json:"gid,omitempty"`
	LastFailureAt      *time.Time               `json:"last_failure_at,omitempty"`
	LastFailureContent *string                  `json:"last_failure_content,omitempty"`
	LastSuccessAt      *time.Time               `json:"last_success_at,omitempty"`
	Resource           *AsanaNamedResource      `json:"resource,omitempty"`
	ResourceType       *string                  `json:"resource_type,omitempty"`
	Target             *string                  `json:"target,omitempty"`
}
