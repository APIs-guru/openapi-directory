package shared

import (
	"time"
)

type ImportJobSummary struct {
	CreatedTimestamp  *time.Time         `json:"CreatedTimestamp"`
	ImportDestination *ImportDestination `json:"ImportDestination"`
	JobID             *string            `json:"JobId"`
	JobStatus         *JobStatusEnum     `json:"JobStatus"`
}
