package shared

import (
	"time"
)

type EnvironmentApprovalsEnvironments struct {
	CreatedAt *time.Time `json:"created_at"`
	HTMLURL   *string    `json:"html_url"`
	ID        *int64     `json:"id"`
	Name      *string    `json:"name"`
	NodeID    *string    `json:"node_id"`
	UpdatedAt *time.Time `json:"updated_at"`
	URL       *string    `json:"url"`
}

type EnvironmentApprovalsStateEnum string

const (
	EnvironmentApprovalsStateEnumApproved EnvironmentApprovalsStateEnum = "approved"
	EnvironmentApprovalsStateEnumRejected EnvironmentApprovalsStateEnum = "rejected"
)

type EnvironmentApprovals struct {
	Comment      string                             `json:"comment"`
	Environments []EnvironmentApprovalsEnvironments `json:"environments"`
	State        EnvironmentApprovalsStateEnum      `json:"state"`
	User         SimpleUser                         `json:"user"`
}
