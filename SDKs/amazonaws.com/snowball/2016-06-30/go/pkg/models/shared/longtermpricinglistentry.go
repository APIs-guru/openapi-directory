package shared

import (
	"time"
)

type LongTermPricingListEntry struct {
	CurrentActiveJob           *string                  `json:"CurrentActiveJob"`
	IsLongTermPricingAutoRenew *bool                    `json:"IsLongTermPricingAutoRenew"`
	JobIds                     []string                 `json:"JobIds"`
	LongTermPricingEndDate     *time.Time               `json:"LongTermPricingEndDate"`
	LongTermPricingID          *string                  `json:"LongTermPricingId"`
	LongTermPricingStartDate   *time.Time               `json:"LongTermPricingStartDate"`
	LongTermPricingStatus      *string                  `json:"LongTermPricingStatus"`
	LongTermPricingType        *LongTermPricingTypeEnum `json:"LongTermPricingType"`
	ReplacementJob             *string                  `json:"ReplacementJob"`
	SnowballType               *SnowballTypeEnum        `json:"SnowballType"`
}
