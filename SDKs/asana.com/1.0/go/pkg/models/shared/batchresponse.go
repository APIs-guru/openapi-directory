package shared

type BatchResponse struct {
	Body       map[string]interface{} `json:"body"`
	Headers    map[string]interface{} `json:"headers"`
	StatusCode *int64                 `json:"status_code"`
}
