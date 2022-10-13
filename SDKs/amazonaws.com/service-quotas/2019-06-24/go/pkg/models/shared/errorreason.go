package shared

type ErrorReason struct {
	ErrorCode    *ErrorCodeEnum `json:"ErrorCode"`
	ErrorMessage *string        `json:"ErrorMessage"`
}
