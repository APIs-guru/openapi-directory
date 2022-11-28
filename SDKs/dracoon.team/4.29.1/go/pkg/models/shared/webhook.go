package shared

import (
	"time"
)

// Webhook
// Webhook information
type Webhook struct {
	CreatedAt      time.Time `json:"createdAt"`
	CreatedBy      *UserInfo `json:"createdBy,omitempty"`
	EventTypeNames []string  `json:"eventTypeNames"`
	ExpireAt       time.Time `json:"expireAt"`
	FailStatus     *int32    `json:"failStatus,omitempty"`
	ID             int64     `json:"id"`
	IsEnabled      bool      `json:"isEnabled"`
	Name           string    `json:"name"`
	Secret         *string   `json:"secret,omitempty"`
	UpdatedAt      time.Time `json:"updatedAt"`
	UpdatedBy      *UserInfo `json:"updatedBy,omitempty"`
	URL            string    `json:"url"`
}
