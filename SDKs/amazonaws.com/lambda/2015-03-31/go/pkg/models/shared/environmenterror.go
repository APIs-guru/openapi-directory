package shared

type EnvironmentError struct {
	ErrorCode *string `json:"ErrorCode,omitempty"`
	Message   *string `json:"Message,omitempty"`
}
