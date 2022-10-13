package shared

import (
	"time"
)

type ProcessingJobSummary struct {
	CreationTime        time.Time               `json:"CreationTime"`
	ExitMessage         *string                 `json:"ExitMessage"`
	FailureReason       *string                 `json:"FailureReason"`
	LastModifiedTime    *time.Time              `json:"LastModifiedTime"`
	ProcessingEndTime   *time.Time              `json:"ProcessingEndTime"`
	ProcessingJobArn    string                  `json:"ProcessingJobArn"`
	ProcessingJobName   string                  `json:"ProcessingJobName"`
	ProcessingJobStatus ProcessingJobStatusEnum `json:"ProcessingJobStatus"`
}
