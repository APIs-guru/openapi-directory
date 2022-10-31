package shared

import (
"time")

type LongTermPricingListEntry struct {
    CurrentActiveJob *string `json:"CurrentActiveJob,omitempty"`
    IsLongTermPricingAutoRenew *bool `json:"IsLongTermPricingAutoRenew,omitempty"`
    JobIds []string `json:"JobIds,omitempty"`
    LongTermPricingEndDate *time.Time `json:"LongTermPricingEndDate,omitempty"`
    LongTermPricingID *string `json:"LongTermPricingId,omitempty"`
    LongTermPricingStartDate *time.Time `json:"LongTermPricingStartDate,omitempty"`
    LongTermPricingStatus *string `json:"LongTermPricingStatus,omitempty"`
    LongTermPricingType *LongTermPricingTypeEnum `json:"LongTermPricingType,omitempty"`
    ReplacementJob *string `json:"ReplacementJob,omitempty"`
    SnowballType *SnowballTypeEnum `json:"SnowballType,omitempty"`
    
}

