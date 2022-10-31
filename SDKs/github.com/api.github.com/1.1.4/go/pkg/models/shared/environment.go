package shared

import (
"time")

type EnvironmentProtectionRules1 struct {
    ID int64 `json:"id"`
    NodeID string `json:"node_id"`
    Type string `json:"type"`
    WaitTimer *int64 `json:"wait_timer,omitempty"`
    
}

type EnvironmentProtectionRules2Reviewers struct {
    Reviewer *interface{} `json:"reviewer,omitempty"`
    Type *DeploymentReviewerTypeEnum `json:"type,omitempty"`
    
}

type EnvironmentProtectionRules2 struct {
    ID int64 `json:"id"`
    NodeID string `json:"node_id"`
    Reviewers []EnvironmentProtectionRules2Reviewers `json:"reviewers,omitempty"`
    Type string `json:"type"`
    
}

type EnvironmentProtectionRules3 struct {
    ID int64 `json:"id"`
    NodeID string `json:"node_id"`
    Type string `json:"type"`
    
}

type Environment struct {
    CreatedAt time.Time `json:"created_at"`
    DeploymentBranchPolicy *DeploymentBranchPolicy `json:"deployment_branch_policy,omitempty"`
    HTMLURL string `json:"html_url"`
    ID int64 `json:"id"`
    Name string `json:"name"`
    NodeID string `json:"node_id"`
    ProtectionRules []interface{} `json:"protection_rules,omitempty"`
    UpdatedAt time.Time `json:"updated_at"`
    URL string `json:"url"`
    
}

