package shared

import (
	"time"
)

type Webhook struct {
	CreatedAt *time.Time `json:"createdAt"`
	Events    []string   `json:"events"`
	URL       *string    `json:"url"`
	WebhookID *string    `json:"webhookId"`
}
