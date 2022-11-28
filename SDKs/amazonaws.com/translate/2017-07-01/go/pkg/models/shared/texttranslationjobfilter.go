package shared

import (
	"time"
)

// TextTranslationJobFilter
// Provides information for filtering a list of translation jobs. For more information, see <a>ListTextTranslationJobs</a>.
type TextTranslationJobFilter struct {
	JobName             *string        `json:"JobName,omitempty"`
	JobStatus           *JobStatusEnum `json:"JobStatus,omitempty"`
	SubmittedAfterTime  *time.Time     `json:"SubmittedAfterTime,omitempty"`
	SubmittedBeforeTime *time.Time     `json:"SubmittedBeforeTime,omitempty"`
}
