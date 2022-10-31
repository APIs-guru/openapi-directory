package shared

import (
	"time"
)

type MerchantStatusEnum string

const (
	MerchantStatusEnumActive   MerchantStatusEnum = "active"
	MerchantStatusEnumInactive MerchantStatusEnum = "inactive"
	MerchantStatusEnumOther    MerchantStatusEnum = "other"
)

type Merchant struct {
	Address        *Address            `json:"address,omitempty"`
	CreatedAt      *time.Time          `json:"created_at,omitempty"`
	CreatedBy      *string             `json:"created_by,omitempty"`
	Currency       *CurrencyEnum       `json:"currency,omitempty"`
	ID             *string             `json:"id,omitempty"`
	Language       *string             `json:"language,omitempty"`
	MainLocationID *string             `json:"main_location_id,omitempty"`
	Name           *string             `json:"name,omitempty"`
	OwnerID        *string             `json:"owner_id,omitempty"`
	ServiceCharges []ServiceCharge     `json:"service_charges,omitempty"`
	Status         *MerchantStatusEnum `json:"status,omitempty"`
	UpdatedAt      *time.Time          `json:"updated_at,omitempty"`
	UpdatedBy      *string             `json:"updated_by,omitempty"`
}
