package shared

// BatchItemError
// Contains the batch request error details associated with the request.
type BatchItemError struct {
	Code    *BatchItemErrorCodeEnum `json:"Code,omitempty"`
	Message *string                 `json:"Message,omitempty"`
}
