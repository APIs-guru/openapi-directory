package shared

import (
	"time"
)

type Modifier struct {
	AlternateName   *string       `json:"alternate_name"`
	Available       *bool         `json:"available"`
	CreatedAt       *time.Time    `json:"created_at"`
	CreatedBy       *string       `json:"created_by"`
	Currency        *CurrencyEnum `json:"currency"`
	ID              *string       `json:"id"`
	IdempotencyKey  *string       `json:"idempotency_key"`
	ModifierGroupID string        `json:"modifier_group_id"`
	Name            string        `json:"name"`
	PriceAmount     *float64      `json:"price_amount"`
	UpdatedAt       *time.Time    `json:"updated_at"`
	UpdatedBy       *string       `json:"updated_by"`
}
