package shared

import (
"time")


type LocationStatusEnum string

const (
    LocationStatusEnumActive LocationStatusEnum = "active"
LocationStatusEnumInactive LocationStatusEnum = "inactive"
LocationStatusEnumOther LocationStatusEnum = "other"
)


type Location struct {
    Address *Address `json:"address,omitempty"`
    BusinessName *string `json:"business_name,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    CreatedBy *string `json:"created_by,omitempty"`
    Currency *CurrencyEnum `json:"currency,omitempty"`
    ID *string `json:"id,omitempty"`
    MerchantID *string `json:"merchant_id,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *LocationStatusEnum `json:"status,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    UpdatedBy *string `json:"updated_by,omitempty"`
    
}

