package shared

import (
	"time"
)

type Purchase struct {
	AuthorizationDate *time.Time    `json:"authorizationDate"`
	CreationDate      time.Time     `json:"creationDate"`
	Currency          string        `json:"currency"`
	ID                string        `json:"id"`
	Item              *ItemPurchase `json:"item"`
	PaymentMethodID   *string       `json:"paymentMethodId"`
	Plan              *PlanPurchase `json:"plan"`
	Total             float32       `json:"total"`
}
