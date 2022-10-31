package shared



type TrainingJobStatusCounters struct {
    Completed *int64 `json:"Completed,omitempty"`
    InProgress *int64 `json:"InProgress,omitempty"`
    NonRetryableError *int64 `json:"NonRetryableError,omitempty"`
    RetryableError *int64 `json:"RetryableError,omitempty"`
    Stopped *int64 `json:"Stopped,omitempty"`
    
}

