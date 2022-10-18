package shared

type GetWebhookResponse struct {
	Data       Webhook `json:"data"`
	Status     string  `json:"status"`
	StatusCode int64   `json:"status_code"`
}
