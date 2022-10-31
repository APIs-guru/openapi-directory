package shared

import (
"time")

type TextTranslationJobFilter struct {
    JobName *string `json:"JobName,omitempty"`
    JobStatus *JobStatusEnum `json:"JobStatus,omitempty"`
    SubmittedAfterTime *time.Time `json:"SubmittedAfterTime,omitempty"`
    SubmittedBeforeTime *time.Time `json:"SubmittedBeforeTime,omitempty"`
    
}

