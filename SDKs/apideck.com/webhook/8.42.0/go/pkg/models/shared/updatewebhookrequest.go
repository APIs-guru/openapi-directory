package shared

type UpdateWebhookRequest struct {
	DeliveryURL *string                `json:"delivery_url"`
	Description *string                `json:"description"`
	Events      []WebhookEventTypeEnum `json:"events"`
	Status      *StatusEnum            `json:"status"`
}
