package shared

// TrainingJobStatusCounters
// The numbers of training jobs launched by a hyperparameter tuning job, categorized by status.
type TrainingJobStatusCounters struct {
	Completed         *int64 `json:"Completed,omitempty"`
	InProgress        *int64 `json:"InProgress,omitempty"`
	NonRetryableError *int64 `json:"NonRetryableError,omitempty"`
	RetryableError    *int64 `json:"RetryableError,omitempty"`
	Stopped           *int64 `json:"Stopped,omitempty"`
}
