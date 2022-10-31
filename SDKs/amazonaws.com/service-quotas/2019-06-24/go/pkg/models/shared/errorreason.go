package shared

type ErrorReason struct {
	ErrorCode    *ErrorCodeEnum `json:"ErrorCode,omitempty"`
	ErrorMessage *string        `json:"ErrorMessage,omitempty"`
}
