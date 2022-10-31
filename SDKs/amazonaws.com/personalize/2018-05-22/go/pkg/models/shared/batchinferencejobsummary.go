package shared

import (
"time")

type BatchInferenceJobSummary struct {
    BatchInferenceJobArn *string `json:"batchInferenceJobArn,omitempty"`
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    FailureReason *string `json:"failureReason,omitempty"`
    JobName *string `json:"jobName,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    SolutionVersionArn *string `json:"solutionVersionArn,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

