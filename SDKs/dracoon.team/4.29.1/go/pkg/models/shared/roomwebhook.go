package shared

type RoomWebhook struct {
	IsAssigned bool    `json:"isAssigned"`
	Webhook    Webhook `json:"webhook"`
}
