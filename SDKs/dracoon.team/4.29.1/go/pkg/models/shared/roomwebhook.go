package shared

// RoomWebhook
// Webhook information
type RoomWebhook struct {
	IsAssigned bool    `json:"isAssigned"`
	Webhook    Webhook `json:"webhook"`
}
