package shared

import (
	"time"
)

type LocationStatusStatusEnum string

const (
	LocationStatusStatusEnumActive   LocationStatusStatusEnum = "active"
	LocationStatusStatusEnumInactive LocationStatusStatusEnum = "inactive"
	LocationStatusStatusEnumOther    LocationStatusStatusEnum = "other"
)

type Location struct {
	Address      *Address                  `json:"address,omitempty"`
	BusinessName *string                   `json:"business_name,omitempty"`
	CreatedAt    *time.Time                `json:"created_at,omitempty"`
	CreatedBy    *string                   `json:"created_by,omitempty"`
	Currency     *CurrencyEnum             `json:"currency,omitempty"`
	ID           *string                   `json:"id,omitempty"`
	MerchantID   *string                   `json:"merchant_id,omitempty"`
	Name         *string                   `json:"name,omitempty"`
	Status       *LocationStatusStatusEnum `json:"status,omitempty"`
	UpdatedAt    *time.Time                `json:"updated_at,omitempty"`
	UpdatedBy    *string                   `json:"updated_by,omitempty"`
}
