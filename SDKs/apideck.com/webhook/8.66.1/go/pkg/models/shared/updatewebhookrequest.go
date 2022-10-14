package shared

type UpdateWebhookRequest struct {
	DeliveryURL *string                `json:"delivery_url,omitempty"`
	Description *string                `json:"description,omitempty"`
	Events      []WebhookEventTypeEnum `json:"events,omitempty"`
	Status      *StatusEnum            `json:"status,omitempty"`
}
