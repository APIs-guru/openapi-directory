package shared

type BatchError struct {
	Arn     *string `json:"arn,omitempty"`
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}
