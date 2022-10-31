package shared

import (
"time")

type Webhook struct {
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    Events []string `json:"events,omitempty"`
    URL *string `json:"url,omitempty"`
    WebhookID *string `json:"webhookId,omitempty"`
    
}

