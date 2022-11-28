package shared

// ImageConfigError
// Error response to GetFunctionConfiguration.
type ImageConfigError struct {
	ErrorCode *string `json:"ErrorCode,omitempty"`
	Message   *string `json:"Message,omitempty"`
}
