package shared

// ErrorDetail
// Contains details about an error.
type ErrorDetail struct {
	ErrorCode    *string `json:"ErrorCode,omitempty"`
	ErrorMessage *string `json:"ErrorMessage,omitempty"`
}
