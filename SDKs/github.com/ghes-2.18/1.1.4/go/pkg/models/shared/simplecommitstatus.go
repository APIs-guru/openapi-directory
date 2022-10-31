package shared

import (
	"time"
)

type SimpleCommitStatus struct {
	AvatarURL   string    `json:"avatar_url"`
	Context     string    `json:"context"`
	CreatedAt   time.Time `json:"created_at"`
	Description string    `json:"description"`
	ID          int64     `json:"id"`
	NodeID      string    `json:"node_id"`
	Required    *bool     `json:"required,omitempty"`
	State       string    `json:"state"`
	TargetURL   string    `json:"target_url"`
	UpdatedAt   time.Time `json:"updated_at"`
	URL         string    `json:"url"`
}
