package shared

import (
	"time"
)

type ItvEntitlementCancelation struct {
	CancelledAt    time.Time `json:"cancelled_at"`
	ItvID          string    `json:"itvId"`
	Source         string    `json:"source"`
	SubscriptionID string    `json:"subscriptionId"`
}
