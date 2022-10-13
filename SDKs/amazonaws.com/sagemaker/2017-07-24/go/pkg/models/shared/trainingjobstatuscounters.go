package shared

type TrainingJobStatusCounters struct {
	Completed         *int64 `json:"Completed"`
	InProgress        *int64 `json:"InProgress"`
	NonRetryableError *int64 `json:"NonRetryableError"`
	RetryableError    *int64 `json:"RetryableError"`
	Stopped           *int64 `json:"Stopped"`
}
