package shared

type RoomWebhookAssignment struct {
	IsAssigned bool  `json:"isAssigned"`
	WebhookID  int64 `json:"webhookId"`
}
