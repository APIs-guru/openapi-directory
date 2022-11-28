package shared

// ErrorReason
// An error that explains why an action did not succeed.
type ErrorReason struct {
	ErrorCode    *ErrorCodeEnum `json:"ErrorCode,omitempty"`
	ErrorMessage *string        `json:"ErrorMessage,omitempty"`
}
