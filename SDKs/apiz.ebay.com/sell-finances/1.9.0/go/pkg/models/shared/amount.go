package shared

// Amount
// This type is used to express the dollar value and currency used for any transaction retrieved with the Finances API, including an order total, a seller payout, a buyer refund, or a seller credit.
type Amount struct {
	ConvertedFromCurrency *string `json:"convertedFromCurrency,omitempty"`
	ConvertedFromValue    *string `json:"convertedFromValue,omitempty"`
	Currency              *string `json:"currency,omitempty"`
	ExchangeRate          *string `json:"exchangeRate,omitempty"`
	Value                 *string `json:"value,omitempty"`
}
