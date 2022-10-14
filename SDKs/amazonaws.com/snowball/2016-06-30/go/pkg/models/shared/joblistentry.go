package shared

import (
	"time"
)

type JobListEntry struct {
	CreationDate *time.Time        `json:"CreationDate,omitempty"`
	Description  *string           `json:"Description,omitempty"`
	IsMaster     *bool             `json:"IsMaster,omitempty"`
	JobID        *string           `json:"JobId,omitempty"`
	JobState     *JobStateEnum     `json:"JobState,omitempty"`
	JobType      *JobTypeEnum      `json:"JobType,omitempty"`
	SnowballType *SnowballTypeEnum `json:"SnowballType,omitempty"`
}
