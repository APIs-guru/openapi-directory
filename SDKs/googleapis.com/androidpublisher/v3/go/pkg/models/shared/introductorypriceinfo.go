package shared

type IntroductoryPriceInfo struct {
	IntroductoryPriceAmountMicros *string `json:"introductoryPriceAmountMicros"`
	IntroductoryPriceCurrencyCode *string `json:"introductoryPriceCurrencyCode"`
	IntroductoryPriceCycles       *int32  `json:"introductoryPriceCycles"`
	IntroductoryPricePeriod       *string `json:"introductoryPricePeriod"`
}
