package shared

import (
	"time"
)

type TextTranslationJobFilter struct {
	JobName             *string        `json:"JobName"`
	JobStatus           *JobStatusEnum `json:"JobStatus"`
	SubmittedAfterTime  *time.Time     `json:"SubmittedAfterTime"`
	SubmittedBeforeTime *time.Time     `json:"SubmittedBeforeTime"`
}
