package shared

// BatchResponse
// A response object returned from a batch request.
type BatchResponse struct {
	Body       map[string]interface{} `json:"body,omitempty"`
	Headers    map[string]interface{} `json:"headers,omitempty"`
	StatusCode *int64                 `json:"status_code,omitempty"`
}
