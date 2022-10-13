package shared

import (
	"time"
)

type AutoMlJobSummary struct {
	AutoMlJobArn             string                       `json:"AutoMLJobArn"`
	AutoMlJobName            string                       `json:"AutoMLJobName"`
	AutoMlJobSecondaryStatus AutoMlJobSecondaryStatusEnum `json:"AutoMLJobSecondaryStatus"`
	AutoMlJobStatus          AutoMlJobStatusEnum          `json:"AutoMLJobStatus"`
	CreationTime             time.Time                    `json:"CreationTime"`
	EndTime                  *time.Time                   `json:"EndTime"`
	FailureReason            *string                      `json:"FailureReason"`
	LastModifiedTime         time.Time                    `json:"LastModifiedTime"`
	PartialFailureReasons    []AutoMlPartialFailureReason `json:"PartialFailureReasons"`
}
