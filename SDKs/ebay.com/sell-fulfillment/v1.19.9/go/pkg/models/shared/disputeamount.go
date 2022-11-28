package shared

// DisputeAmount
// This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
type DisputeAmount struct {
	ConvertedFromCurrency *string `json:"convertedFromCurrency,omitempty"`
	ConvertedFromValue    *string `json:"convertedFromValue,omitempty"`
	Currency              *string `json:"currency,omitempty"`
	ExchangeRate          *string `json:"exchangeRate,omitempty"`
	Value                 *string `json:"value,omitempty"`
}
