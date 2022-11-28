package shared

// RoomWebhookList
// List of webhooks
type RoomWebhookList struct {
	Items []RoomWebhook `json:"items"`
	Range Range         `json:"range"`
}
