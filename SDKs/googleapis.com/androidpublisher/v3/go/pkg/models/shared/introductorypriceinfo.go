package shared

// IntroductoryPriceInfo
// Contains the introductory price information for a subscription.
type IntroductoryPriceInfo struct {
	IntroductoryPriceAmountMicros *string `json:"introductoryPriceAmountMicros,omitempty"`
	IntroductoryPriceCurrencyCode *string `json:"introductoryPriceCurrencyCode,omitempty"`
	IntroductoryPriceCycles       *int32  `json:"introductoryPriceCycles,omitempty"`
	IntroductoryPricePeriod       *string `json:"introductoryPricePeriod,omitempty"`
}
