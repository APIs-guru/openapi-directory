package shared

import (
	"time"
)

// JobListEntry
// Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of an export job.
type JobListEntry struct {
	CreationDate *time.Time        `json:"CreationDate,omitempty"`
	Description  *string           `json:"Description,omitempty"`
	IsMaster     *bool             `json:"IsMaster,omitempty"`
	JobID        *string           `json:"JobId,omitempty"`
	JobState     *JobStateEnum     `json:"JobState,omitempty"`
	JobType      *JobTypeEnum      `json:"JobType,omitempty"`
	SnowballType *SnowballTypeEnum `json:"SnowballType,omitempty"`
}
