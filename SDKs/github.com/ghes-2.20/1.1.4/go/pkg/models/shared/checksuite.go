package shared

import (
	"time"
)

type CheckSuiteConclusionEnum string

const (
	CheckSuiteConclusionEnumSuccess        CheckSuiteConclusionEnum = "success"
	CheckSuiteConclusionEnumFailure        CheckSuiteConclusionEnum = "failure"
	CheckSuiteConclusionEnumNeutral        CheckSuiteConclusionEnum = "neutral"
	CheckSuiteConclusionEnumCancelled      CheckSuiteConclusionEnum = "cancelled"
	CheckSuiteConclusionEnumSkipped        CheckSuiteConclusionEnum = "skipped"
	CheckSuiteConclusionEnumTimedOut       CheckSuiteConclusionEnum = "timed_out"
	CheckSuiteConclusionEnumActionRequired CheckSuiteConclusionEnum = "action_required"
)

type CheckSuiteStatusEnum string

const (
	CheckSuiteStatusEnumQueued     CheckSuiteStatusEnum = "queued"
	CheckSuiteStatusEnumInProgress CheckSuiteStatusEnum = "in_progress"
	CheckSuiteStatusEnumCompleted  CheckSuiteStatusEnum = "completed"
)

type CheckSuite struct {
	After                string                   `json:"after"`
	App                  map[string]interface{}   `json:"app"`
	Before               string                   `json:"before"`
	CheckRunsURL         string                   `json:"check_runs_url"`
	Conclusion           CheckSuiteConclusionEnum `json:"conclusion"`
	CreatedAt            time.Time                `json:"created_at"`
	HeadBranch           string                   `json:"head_branch"`
	HeadCommit           SimpleCommit             `json:"head_commit"`
	HeadSha              string                   `json:"head_sha"`
	ID                   int64                    `json:"id"`
	LatestCheckRunsCount int64                    `json:"latest_check_runs_count"`
	NodeID               string                   `json:"node_id"`
	PullRequests         []PullRequestMinimal     `json:"pull_requests"`
	Repository           MinimalRepository        `json:"repository"`
	Status               CheckSuiteStatusEnum     `json:"status"`
	UpdatedAt            time.Time                `json:"updated_at"`
	URL                  string                   `json:"url"`
}
