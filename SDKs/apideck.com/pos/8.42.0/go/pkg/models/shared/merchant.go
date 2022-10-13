package shared

import (
	"time"
)

type MerchantStatusStatusEnum string

const (
	MerchantStatusStatusEnumActive   MerchantStatusStatusEnum = "active"
	MerchantStatusStatusEnumInactive MerchantStatusStatusEnum = "inactive"
	MerchantStatusStatusEnumOther    MerchantStatusStatusEnum = "other"
)

type Merchant struct {
	Address        *Address                  `json:"address"`
	CreatedAt      *time.Time                `json:"created_at"`
	CreatedBy      *string                   `json:"created_by"`
	Currency       *CurrencyEnum             `json:"currency"`
	ID             *string                   `json:"id"`
	Language       *string                   `json:"language"`
	MainLocationID *string                   `json:"main_location_id"`
	Name           *string                   `json:"name"`
	OwnerID        *string                   `json:"owner_id"`
	ServiceCharges []ServiceCharge           `json:"service_charges"`
	Status         *MerchantStatusStatusEnum `json:"status"`
	UpdatedAt      *time.Time                `json:"updated_at"`
	UpdatedBy      *string                   `json:"updated_by"`
}
