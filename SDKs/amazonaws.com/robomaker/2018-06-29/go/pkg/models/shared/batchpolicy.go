package shared

// BatchPolicy
// Information about the batch policy.
type BatchPolicy struct {
	MaxConcurrency   *int64 `json:"maxConcurrency,omitempty"`
	TimeoutInSeconds *int64 `json:"timeoutInSeconds,omitempty"`
}
