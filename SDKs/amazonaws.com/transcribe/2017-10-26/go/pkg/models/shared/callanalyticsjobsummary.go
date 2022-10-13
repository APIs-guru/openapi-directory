package shared

import (
	"time"
)

type CallAnalyticsJobSummary struct {
	CallAnalyticsJobName   *string                     `json:"CallAnalyticsJobName"`
	CallAnalyticsJobStatus *CallAnalyticsJobStatusEnum `json:"CallAnalyticsJobStatus"`
	CompletionTime         *time.Time                  `json:"CompletionTime"`
	CreationTime           *time.Time                  `json:"CreationTime"`
	FailureReason          *string                     `json:"FailureReason"`
	LanguageCode           *LanguageCodeEnum           `json:"LanguageCode"`
	StartTime              *time.Time                  `json:"StartTime"`
}
