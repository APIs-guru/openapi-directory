package shared

type CreateWebhookRequest struct {
	EventTypeNames      []string `json:"eventTypeNames"`
	IsEnabled           *bool    `json:"isEnabled"`
	Name                string   `json:"name"`
	Secret              *string  `json:"secret"`
	TriggerExampleEvent *bool    `json:"triggerExampleEvent"`
	URL                 string   `json:"url"`
}
