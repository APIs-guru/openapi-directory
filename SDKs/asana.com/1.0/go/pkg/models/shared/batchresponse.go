package shared

type BatchResponse struct {
	Body       map[string]interface{} `json:"body,omitempty"`
	Headers    map[string]interface{} `json:"headers,omitempty"`
	StatusCode *int64                 `json:"status_code,omitempty"`
}
