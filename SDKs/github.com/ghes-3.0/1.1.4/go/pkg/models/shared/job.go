package shared

import (
	"time"
)

type JobStatusEnum string

const (
	JobStatusEnumQueued     JobStatusEnum = "queued"
	JobStatusEnumInProgress JobStatusEnum = "in_progress"
	JobStatusEnumCompleted  JobStatusEnum = "completed"
)

type JobStepsStatusEnum string

const (
	JobStepsStatusEnumQueued     JobStepsStatusEnum = "queued"
	JobStepsStatusEnumInProgress JobStepsStatusEnum = "in_progress"
	JobStepsStatusEnumCompleted  JobStepsStatusEnum = "completed"
)

type JobSteps struct {
	CompletedAt *time.Time         `json:"completed_at"`
	Conclusion  string             `json:"conclusion"`
	Name        string             `json:"name"`
	Number      int64              `json:"number"`
	StartedAt   *time.Time         `json:"started_at"`
	Status      JobStepsStatusEnum `json:"status"`
}

type Job struct {
	CheckRunURL string        `json:"check_run_url"`
	CompletedAt time.Time     `json:"completed_at"`
	Conclusion  string        `json:"conclusion"`
	HeadSha     string        `json:"head_sha"`
	HTMLURL     string        `json:"html_url"`
	ID          int64         `json:"id"`
	Name        string        `json:"name"`
	NodeID      string        `json:"node_id"`
	RunID       int64         `json:"run_id"`
	RunURL      string        `json:"run_url"`
	StartedAt   time.Time     `json:"started_at"`
	Status      JobStatusEnum `json:"status"`
	Steps       []JobSteps    `json:"steps"`
	URL         string        `json:"url"`
}
