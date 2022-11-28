package shared

// BatchError
// Error related to a specific channel, specified by its ARN.
type BatchError struct {
	Arn     *string `json:"arn,omitempty"`
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}
