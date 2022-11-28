package shared

// ErrorDetail
// Details about the error.
type ErrorDetail struct {
	ErrorCode    *string `json:"ErrorCode,omitempty"`
	ErrorMessage *string `json:"ErrorMessage,omitempty"`
}
