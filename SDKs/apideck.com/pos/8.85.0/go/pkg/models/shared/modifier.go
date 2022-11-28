package shared

import (
	"time"
)

type Modifier struct {
	AlternateName   *string       `json:"alternate_name,omitempty"`
	Available       *bool         `json:"available,omitempty"`
	CreatedAt       *time.Time    `json:"created_at,omitempty"`
	CreatedBy       *string       `json:"created_by,omitempty"`
	Currency        *CurrencyEnum `json:"currency,omitempty"`
	ID              *string       `json:"id,omitempty"`
	IdempotencyKey  *string       `json:"idempotency_key,omitempty"`
	ModifierGroupID string        `json:"modifier_group_id"`
	Name            string        `json:"name"`
	PriceAmount     *float64      `json:"price_amount,omitempty"`
	UpdatedAt       *time.Time    `json:"updated_at,omitempty"`
	UpdatedBy       *string       `json:"updated_by,omitempty"`
}

type ModifierInput struct {
	AlternateName   *string       `json:"alternate_name,omitempty"`
	Available       *bool         `json:"available,omitempty"`
	Currency        *CurrencyEnum `json:"currency,omitempty"`
	IdempotencyKey  *string       `json:"idempotency_key,omitempty"`
	ModifierGroupID string        `json:"modifier_group_id"`
	Name            string        `json:"name"`
	PriceAmount     *float64      `json:"price_amount,omitempty"`
}
