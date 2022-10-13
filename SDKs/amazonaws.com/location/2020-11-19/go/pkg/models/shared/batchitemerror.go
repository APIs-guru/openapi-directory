package shared

type BatchItemError struct {
	Code    *BatchItemErrorCodeEnum `json:"Code"`
	Message *string                 `json:"Message"`
}
