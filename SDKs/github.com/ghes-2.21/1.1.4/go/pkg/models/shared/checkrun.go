package shared

import (
	"time"
)

type CheckRunCheckSuite struct {
	ID int64 `json:"id"`
}

type CheckRunConclusionEnum string

const (
	CheckRunConclusionEnumSuccess        CheckRunConclusionEnum = "success"
	CheckRunConclusionEnumFailure        CheckRunConclusionEnum = "failure"
	CheckRunConclusionEnumNeutral        CheckRunConclusionEnum = "neutral"
	CheckRunConclusionEnumCancelled      CheckRunConclusionEnum = "cancelled"
	CheckRunConclusionEnumSkipped        CheckRunConclusionEnum = "skipped"
	CheckRunConclusionEnumTimedOut       CheckRunConclusionEnum = "timed_out"
	CheckRunConclusionEnumActionRequired CheckRunConclusionEnum = "action_required"
)

type CheckRunOutput struct {
	AnnotationsCount int64  `json:"annotations_count"`
	AnnotationsURL   string `json:"annotations_url"`
	Summary          string `json:"summary"`
	Text             string `json:"text"`
	Title            string `json:"title"`
}

type CheckRunStatusEnum string

const (
	CheckRunStatusEnumQueued     CheckRunStatusEnum = "queued"
	CheckRunStatusEnumInProgress CheckRunStatusEnum = "in_progress"
	CheckRunStatusEnumCompleted  CheckRunStatusEnum = "completed"
)

type CheckRun struct {
	App          map[string]interface{} `json:"app"`
	CheckSuite   CheckRunCheckSuite     `json:"check_suite"`
	CompletedAt  time.Time              `json:"completed_at"`
	Conclusion   CheckRunConclusionEnum `json:"conclusion"`
	Deployment   *DeploymentSimple      `json:"deployment,omitempty"`
	DetailsURL   string                 `json:"details_url"`
	ExternalID   string                 `json:"external_id"`
	HeadSha      string                 `json:"head_sha"`
	HTMLURL      string                 `json:"html_url"`
	ID           int64                  `json:"id"`
	Name         string                 `json:"name"`
	NodeID       string                 `json:"node_id"`
	Output       CheckRunOutput         `json:"output"`
	PullRequests interface{}            `json:"pull_requests"`
	StartedAt    time.Time              `json:"started_at"`
	Status       CheckRunStatusEnum     `json:"status"`
	URL          string                 `json:"url"`
}
