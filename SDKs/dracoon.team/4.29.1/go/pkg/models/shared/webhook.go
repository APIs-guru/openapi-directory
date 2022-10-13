package shared

import (
	"time"
)

type Webhook struct {
	CreatedAt      time.Time `json:"createdAt"`
	CreatedBy      *UserInfo `json:"createdBy"`
	EventTypeNames []string  `json:"eventTypeNames"`
	ExpireAt       time.Time `json:"expireAt"`
	FailStatus     *int32    `json:"failStatus"`
	ID             int64     `json:"id"`
	IsEnabled      bool      `json:"isEnabled"`
	Name           string    `json:"name"`
	Secret         *string   `json:"secret"`
	UpdatedAt      time.Time `json:"updatedAt"`
	UpdatedBy      *UserInfo `json:"updatedBy"`
	URL            string    `json:"url"`
}
