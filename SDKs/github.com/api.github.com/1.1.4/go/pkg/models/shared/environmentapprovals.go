package shared

import (
"time")

type EnvironmentApprovalsEnvironments struct {
    CreatedAt *time.Time `json:"created_at,omitempty"`
    HTMLURL *string `json:"html_url,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    NodeID *string `json:"node_id,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    URL *string `json:"url,omitempty"`
    
}


type EnvironmentApprovalsStateEnum string

const (
    EnvironmentApprovalsStateEnumApproved EnvironmentApprovalsStateEnum = "approved"
EnvironmentApprovalsStateEnumRejected EnvironmentApprovalsStateEnum = "rejected"
)


type EnvironmentApprovals struct {
    Comment string `json:"comment"`
    Environments []EnvironmentApprovalsEnvironments `json:"environments"`
    State EnvironmentApprovalsStateEnum `json:"state"`
    User SimpleUser `json:"user"`
    
}

