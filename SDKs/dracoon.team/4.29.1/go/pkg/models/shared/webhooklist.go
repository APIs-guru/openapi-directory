package shared

// WebhookList
// List of webhooks
type WebhookList struct {
	Items []Webhook `json:"items"`
	Range Range     `json:"range"`
}
