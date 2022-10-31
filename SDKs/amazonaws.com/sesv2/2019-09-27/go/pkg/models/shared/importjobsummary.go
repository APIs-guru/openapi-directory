package shared

import (
"time")

type ImportJobSummary struct {
    CreatedTimestamp *time.Time `json:"CreatedTimestamp,omitempty"`
    ImportDestination *ImportDestination `json:"ImportDestination,omitempty"`
    JobID *string `json:"JobId,omitempty"`
    JobStatus *JobStatusEnum `json:"JobStatus,omitempty"`
    
}

