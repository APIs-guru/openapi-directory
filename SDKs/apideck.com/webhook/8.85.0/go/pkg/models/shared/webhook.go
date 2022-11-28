package shared

import (
	"time"
)

type Webhook struct {
	CreatedAt      *time.Time             `json:"created_at,omitempty"`
	DeliveryURL    string                 `json:"delivery_url"`
	Description    *string                `json:"description,omitempty"`
	Events         []WebhookEventTypeEnum `json:"events"`
	ExecuteBaseURL string                 `json:"execute_base_url"`
	ID             *string                `json:"id,omitempty"`
	Status         StatusEnum             `json:"status"`
	UnifiedAPI     UnifiedAPIIDEnum       `json:"unified_api"`
	UpdatedAt      *time.Time             `json:"updated_at,omitempty"`
}
