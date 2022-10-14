package shared

import (
	"time"
)

type CallAnalyticsJobSummary struct {
	CallAnalyticsJobName   *string                     `json:"CallAnalyticsJobName,omitempty"`
	CallAnalyticsJobStatus *CallAnalyticsJobStatusEnum `json:"CallAnalyticsJobStatus,omitempty"`
	CompletionTime         *time.Time                  `json:"CompletionTime,omitempty"`
	CreationTime           *time.Time                  `json:"CreationTime,omitempty"`
	FailureReason          *string                     `json:"FailureReason,omitempty"`
	LanguageCode           *LanguageCodeEnum           `json:"LanguageCode,omitempty"`
	StartTime              *time.Time                  `json:"StartTime,omitempty"`
}
