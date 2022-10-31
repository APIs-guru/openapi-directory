package shared

import (
"time")

type ProductCouponAPIModel struct {
    Code *string `json:"Code,omitempty"`
    DiscountAmount *float64 `json:"DiscountAmount,omitempty"`
    DiscountPercentage *float64 `json:"DiscountPercentage,omitempty"`
    ID *int32 `json:"Id,omitempty"`
    ValidUntil *time.Time `json:"ValidUntil,omitempty"`
    
}

