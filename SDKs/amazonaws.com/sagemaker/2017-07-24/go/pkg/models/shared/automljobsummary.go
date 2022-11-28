package shared

import (
	"time"
)

// AutoMlJobSummary
// Provides a summary about an AutoML job.
type AutoMlJobSummary struct {
	AutoMlJobArn             string                       `json:"AutoMLJobArn"`
	AutoMlJobName            string                       `json:"AutoMLJobName"`
	AutoMlJobSecondaryStatus AutoMlJobSecondaryStatusEnum `json:"AutoMLJobSecondaryStatus"`
	AutoMlJobStatus          AutoMlJobStatusEnum          `json:"AutoMLJobStatus"`
	CreationTime             time.Time                    `json:"CreationTime"`
	EndTime                  *time.Time                   `json:"EndTime,omitempty"`
	FailureReason            *string                      `json:"FailureReason,omitempty"`
	LastModifiedTime         time.Time                    `json:"LastModifiedTime"`
	PartialFailureReasons    []AutoMlPartialFailureReason `json:"PartialFailureReasons,omitempty"`
}
