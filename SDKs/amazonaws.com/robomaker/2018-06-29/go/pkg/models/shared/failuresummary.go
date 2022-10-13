package shared

type FailureSummary struct {
	Failures          []WorldFailure `json:"failures"`
	TotalFailureCount *int64         `json:"totalFailureCount"`
}
