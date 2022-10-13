package shared

type BatchPolicy struct {
	MaxConcurrency   *int64 `json:"maxConcurrency"`
	TimeoutInSeconds *int64 `json:"timeoutInSeconds"`
}
