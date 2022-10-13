package shared

type FailureInfo struct {
	ErrorCode    *ErrorCodeEnum `json:"ErrorCode"`
	ErrorMessage *string        `json:"ErrorMessage"`
	StatusCode   *int64         `json:"StatusCode"`
}
