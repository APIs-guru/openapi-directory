package shared

type SubscriptionItemPriceChangeDetailsPriceChangeModeEnum string

const (
	SubscriptionItemPriceChangeDetailsPriceChangeModeEnumPriceChangeModeUnspecified SubscriptionItemPriceChangeDetailsPriceChangeModeEnum = "PRICE_CHANGE_MODE_UNSPECIFIED"
	SubscriptionItemPriceChangeDetailsPriceChangeModeEnumPriceDecrease              SubscriptionItemPriceChangeDetailsPriceChangeModeEnum = "PRICE_DECREASE"
	SubscriptionItemPriceChangeDetailsPriceChangeModeEnumPriceIncrease              SubscriptionItemPriceChangeDetailsPriceChangeModeEnum = "PRICE_INCREASE"
)

type SubscriptionItemPriceChangeDetailsPriceChangeStateEnum string

const (
	SubscriptionItemPriceChangeDetailsPriceChangeStateEnumPriceChangeStateUnspecified SubscriptionItemPriceChangeDetailsPriceChangeStateEnum = "PRICE_CHANGE_STATE_UNSPECIFIED"
	SubscriptionItemPriceChangeDetailsPriceChangeStateEnumOutstanding                 SubscriptionItemPriceChangeDetailsPriceChangeStateEnum = "OUTSTANDING"
	SubscriptionItemPriceChangeDetailsPriceChangeStateEnumConfirmed                   SubscriptionItemPriceChangeDetailsPriceChangeStateEnum = "CONFIRMED"
	SubscriptionItemPriceChangeDetailsPriceChangeStateEnumApplied                     SubscriptionItemPriceChangeDetailsPriceChangeStateEnum = "APPLIED"
)

// SubscriptionItemPriceChangeDetails
// Price change related information of a subscription item.
type SubscriptionItemPriceChangeDetails struct {
	ExpectedNewPriceChargeTime *string                                                 `json:"expectedNewPriceChargeTime,omitempty"`
	NewPrice                   *Money                                                  `json:"newPrice,omitempty"`
	PriceChangeMode            *SubscriptionItemPriceChangeDetailsPriceChangeModeEnum  `json:"priceChangeMode,omitempty"`
	PriceChangeState           *SubscriptionItemPriceChangeDetailsPriceChangeStateEnum `json:"priceChangeState,omitempty"`
}
