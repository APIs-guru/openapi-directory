package shared

type IntroductoryPriceInfo struct {
	IntroductoryPriceAmountMicros *string `json:"introductoryPriceAmountMicros,omitempty"`
	IntroductoryPriceCurrencyCode *string `json:"introductoryPriceCurrencyCode,omitempty"`
	IntroductoryPriceCycles       *int32  `json:"introductoryPriceCycles,omitempty"`
	IntroductoryPricePeriod       *string `json:"introductoryPricePeriod,omitempty"`
}
