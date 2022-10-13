package shared

import (
	"time"
)

type WorkflowStateEnum string

const (
	WorkflowStateEnumActive             WorkflowStateEnum = "active"
	WorkflowStateEnumDeleted            WorkflowStateEnum = "deleted"
	WorkflowStateEnumDisabledFork       WorkflowStateEnum = "disabled_fork"
	WorkflowStateEnumDisabledInactivity WorkflowStateEnum = "disabled_inactivity"
	WorkflowStateEnumDisabledManually   WorkflowStateEnum = "disabled_manually"
)

type Workflow struct {
	BadgeURL  string            `json:"badge_url"`
	CreatedAt time.Time         `json:"created_at"`
	DeletedAt *time.Time        `json:"deleted_at"`
	HTMLURL   string            `json:"html_url"`
	ID        int64             `json:"id"`
	Name      string            `json:"name"`
	NodeID    string            `json:"node_id"`
	Path      string            `json:"path"`
	State     WorkflowStateEnum `json:"state"`
	UpdatedAt time.Time         `json:"updated_at"`
	URL       string            `json:"url"`
}
