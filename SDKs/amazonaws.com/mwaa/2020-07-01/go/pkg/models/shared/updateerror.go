package shared

// UpdateError
// An object containing the error encountered with the last update: <code>ErrorCode</code>, <code>ErrorMessage</code>.
type UpdateError struct {
	ErrorCode    *string `json:"ErrorCode,omitempty"`
	ErrorMessage *string `json:"ErrorMessage,omitempty"`
}
