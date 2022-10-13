package shared

import (
	"time"
)

type JobListEntry struct {
	CreationDate *time.Time        `json:"CreationDate"`
	Description  *string           `json:"Description"`
	IsMaster     *bool             `json:"IsMaster"`
	JobID        *string           `json:"JobId"`
	JobState     *JobStateEnum     `json:"JobState"`
	JobType      *JobTypeEnum      `json:"JobType"`
	SnowballType *SnowballTypeEnum `json:"SnowballType"`
}
