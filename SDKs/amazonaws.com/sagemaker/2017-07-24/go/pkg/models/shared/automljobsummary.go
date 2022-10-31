package shared

import (
"time")

type AutoMlJobSummary struct {
    AutoMlJobArn string `json:"AutoMLJobArn"`
    AutoMlJobName string `json:"AutoMLJobName"`
    AutoMlJobSecondaryStatus AutoMlJobSecondaryStatusEnum `json:"AutoMLJobSecondaryStatus"`
    AutoMlJobStatus AutoMlJobStatusEnum `json:"AutoMLJobStatus"`
    CreationTime time.Time `json:"CreationTime"`
    EndTime *time.Time `json:"EndTime,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    LastModifiedTime time.Time `json:"LastModifiedTime"`
    PartialFailureReasons []AutoMlPartialFailureReason `json:"PartialFailureReasons,omitempty"`
    
}

