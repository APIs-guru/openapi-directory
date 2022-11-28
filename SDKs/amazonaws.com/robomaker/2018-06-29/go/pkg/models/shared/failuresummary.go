package shared

// FailureSummary
// Information about worlds that failed.
type FailureSummary struct {
	Failures          []WorldFailure `json:"failures,omitempty"`
	TotalFailureCount *int64         `json:"totalFailureCount,omitempty"`
}
