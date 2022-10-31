package shared

import (
"time")

type ListInferenceExecutionsRequest struct {
    DataEndTimeBefore *time.Time `json:"DataEndTimeBefore,omitempty"`
    DataStartTimeAfter *time.Time `json:"DataStartTimeAfter,omitempty"`
    InferenceSchedulerName string `json:"InferenceSchedulerName"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Status *InferenceExecutionStatusEnum `json:"Status,omitempty"`
    
}

