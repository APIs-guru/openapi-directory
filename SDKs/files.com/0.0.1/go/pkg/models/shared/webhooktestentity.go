package shared

type WebhookTestEntity struct {
	Code    *int32      `json:"code"`
	Data    *AutoEntity `json:"data"`
	Message *string     `json:"message"`
	Status  *string     `json:"status"`
	Success *bool       `json:"success"`
}
