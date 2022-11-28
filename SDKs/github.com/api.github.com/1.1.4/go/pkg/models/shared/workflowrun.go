package shared

import (
	"time"
)

// WorkflowRun
// An invocation of a workflow
type WorkflowRun struct {
	ArtifactsURL     string               `json:"artifacts_url"`
	CancelURL        string               `json:"cancel_url"`
	CheckSuiteURL    string               `json:"check_suite_url"`
	Conclusion       string               `json:"conclusion"`
	CreatedAt        time.Time            `json:"created_at"`
	Event            string               `json:"event"`
	HeadBranch       string               `json:"head_branch"`
	HeadCommit       SimpleCommit         `json:"head_commit"`
	HeadRepository   MinimalRepository    `json:"head_repository"`
	HeadRepositoryID *int64               `json:"head_repository_id,omitempty"`
	HeadSha          string               `json:"head_sha"`
	HTMLURL          string               `json:"html_url"`
	ID               int64                `json:"id"`
	JobsURL          string               `json:"jobs_url"`
	LogsURL          string               `json:"logs_url"`
	Name             *string              `json:"name,omitempty"`
	NodeID           string               `json:"node_id"`
	PullRequests     []PullRequestMinimal `json:"pull_requests"`
	Repository       MinimalRepository    `json:"repository"`
	RerunURL         string               `json:"rerun_url"`
	RunNumber        int64                `json:"run_number"`
	Status           string               `json:"status"`
	UpdatedAt        time.Time            `json:"updated_at"`
	URL              string               `json:"url"`
	WorkflowID       int64                `json:"workflow_id"`
	WorkflowURL      string               `json:"workflow_url"`
}
