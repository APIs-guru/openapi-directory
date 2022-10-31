package shared

import (
"time")

type ProductDiscountAPIModel struct {
    DiscountAmount *float64 `json:"DiscountAmount,omitempty"`
    DiscountPercentage *float64 `json:"DiscountPercentage,omitempty"`
    ID *int32 `json:"Id,omitempty"`
    Name *string `json:"Name,omitempty"`
    ValidFrom *time.Time `json:"ValidFrom,omitempty"`
    ValidTo *time.Time `json:"ValidTo,omitempty"`
    
}

