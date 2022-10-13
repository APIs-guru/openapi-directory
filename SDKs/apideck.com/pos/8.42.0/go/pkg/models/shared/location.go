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
	Address      *Address                  `json:"address"`
	BusinessName *string                   `json:"business_name"`
	CreatedAt    *time.Time                `json:"created_at"`
	CreatedBy    *string                   `json:"created_by"`
	Currency     *CurrencyEnum             `json:"currency"`
	ID           *string                   `json:"id"`
	MerchantID   *string                   `json:"merchant_id"`
	Name         *string                   `json:"name"`
	Status       *LocationStatusStatusEnum `json:"status"`
	UpdatedAt    *time.Time                `json:"updated_at"`
	UpdatedBy    *string                   `json:"updated_by"`
}
