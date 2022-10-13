package shared

type ExecuteWebhookResponse struct {
	RequestID  *string `json:"request_id"`
	Status     string  `json:"status"`
	StatusCode int64   `json:"status_code"`
	Timestamp  *string `json:"timestamp"`
}
