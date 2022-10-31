package shared

import (
"time")

type PendingDeploymentEnvironment struct {
    HTMLURL *string `json:"html_url,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    NodeID *string `json:"node_id,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type PendingDeploymentReviewers struct {
    Reviewer *interface{} `json:"reviewer,omitempty"`
    Type *DeploymentReviewerTypeEnum `json:"type,omitempty"`
    
}

type PendingDeployment struct {
    CurrentUserCanApprove bool `json:"current_user_can_approve"`
    Environment PendingDeploymentEnvironment `json:"environment"`
    Reviewers []PendingDeploymentReviewers `json:"reviewers"`
    WaitTimer int64 `json:"wait_timer"`
    WaitTimerStartedAt time.Time `json:"wait_timer_started_at"`
    
}

