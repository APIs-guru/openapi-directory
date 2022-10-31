package shared



type Price struct {
    AmountMicros *float64 `json:"amountMicros,omitempty"`
    CurrencyCode *string `json:"currencyCode,omitempty"`
    ExpectedCpmMicros *float64 `json:"expectedCpmMicros,omitempty"`
    PricingType *string `json:"pricingType,omitempty"`
    
}

