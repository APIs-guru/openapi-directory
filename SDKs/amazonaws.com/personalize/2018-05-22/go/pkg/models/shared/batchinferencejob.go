package shared

import (
"time")

type BatchInferenceJob struct {
    BatchInferenceJobArn *string `json:"batchInferenceJobArn,omitempty"`
    BatchInferenceJobConfig *BatchInferenceJobConfig `json:"batchInferenceJobConfig,omitempty"`
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    FailureReason *string `json:"failureReason,omitempty"`
    FilterArn *string `json:"filterArn,omitempty"`
    JobInput *BatchInferenceJobInput `json:"jobInput,omitempty"`
    JobName *string `json:"jobName,omitempty"`
    JobOutput *BatchInferenceJobOutput `json:"jobOutput,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    NumResults *int64 `json:"numResults,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    SolutionVersionArn *string `json:"solutionVersionArn,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

