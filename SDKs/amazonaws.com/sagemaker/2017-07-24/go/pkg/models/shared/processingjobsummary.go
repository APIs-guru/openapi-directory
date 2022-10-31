package shared

import (
"time")

type ProcessingJobSummary struct {
    CreationTime time.Time `json:"CreationTime"`
    ExitMessage *string `json:"ExitMessage,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    ProcessingEndTime *time.Time `json:"ProcessingEndTime,omitempty"`
    ProcessingJobArn string `json:"ProcessingJobArn"`
    ProcessingJobName string `json:"ProcessingJobName"`
    ProcessingJobStatus ProcessingJobStatusEnum `json:"ProcessingJobStatus"`
    
}

