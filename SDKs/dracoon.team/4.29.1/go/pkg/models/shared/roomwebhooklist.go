package shared

type RoomWebhookList struct {
	Items []RoomWebhook `json:"items"`
	Range Range         `json:"range"`
}
