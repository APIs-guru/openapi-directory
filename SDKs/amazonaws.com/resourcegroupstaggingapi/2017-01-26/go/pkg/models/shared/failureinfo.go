package shared

type FailureInfo struct {
	ErrorCode    *ErrorCodeEnum `json:"ErrorCode,omitempty"`
	ErrorMessage *string        `json:"ErrorMessage,omitempty"`
	StatusCode   *int64         `json:"StatusCode,omitempty"`
}
