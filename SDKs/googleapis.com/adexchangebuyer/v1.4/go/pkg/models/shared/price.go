package shared

type Price struct {
	AmountMicros      *float64 `json:"amountMicros"`
	CurrencyCode      *string  `json:"currencyCode"`
	ExpectedCpmMicros *float64 `json:"expectedCpmMicros"`
	PricingType       *string  `json:"pricingType"`
}
