package shared

import (
	"time"
)

type PendingDeploymentEnvironment struct {
	HTMLURL *string `json:"html_url"`
	ID      *int64  `json:"id"`
	Name    *string `json:"name"`
	NodeID  *string `json:"node_id"`
	URL     *string `json:"url"`
}

type PendingDeploymentReviewers struct {
	Reviewer *interface{}                `json:"reviewer"`
	Type     *DeploymentReviewerTypeEnum `json:"type"`
}

type PendingDeployment struct {
	CurrentUserCanApprove bool                         `json:"current_user_can_approve"`
	Environment           PendingDeploymentEnvironment `json:"environment"`
	Reviewers             []PendingDeploymentReviewers `json:"reviewers"`
	WaitTimer             int64                        `json:"wait_timer"`
	WaitTimerStartedAt    time.Time                    `json:"wait_timer_started_at"`
}
