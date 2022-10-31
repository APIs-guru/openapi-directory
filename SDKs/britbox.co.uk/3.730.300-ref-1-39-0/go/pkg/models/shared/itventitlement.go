package shared

import (
	"time"
)

type ItvEntitlement struct {
	CardType       *time.Time             `json:"card_type,omitempty"`
	Expiry         time.Time              `json:"expiry"`
	Plan           map[string]interface{} `json:"plan"`
	Source         string                 `json:"source"`
	SubscriptionID string                 `json:"subscriptionId"`
}
