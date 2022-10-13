package shared

type RetryStrategy struct {
	MaximumRetryAttempts int64 `json:"MaximumRetryAttempts"`
}
