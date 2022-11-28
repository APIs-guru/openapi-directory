package shared

// RoomWebhookAssignment
// Request model for handling webhook assignments
type RoomWebhookAssignment struct {
	IsAssigned bool  `json:"isAssigned"`
	WebhookID  int64 `json:"webhookId"`
}
