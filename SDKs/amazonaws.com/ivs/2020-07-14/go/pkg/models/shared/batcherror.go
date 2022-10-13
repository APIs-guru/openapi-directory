package shared

type BatchError struct {
	Arn     *string `json:"arn"`
	Code    *string `json:"code"`
	Message *string `json:"message"`
}
