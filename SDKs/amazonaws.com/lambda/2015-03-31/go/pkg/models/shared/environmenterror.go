package shared

// EnvironmentError
// Error messages for environment variables that couldn't be applied.
type EnvironmentError struct {
	ErrorCode *string `json:"ErrorCode,omitempty"`
	Message   *string `json:"Message,omitempty"`
}
