package shared

type DisputeAmount struct {
	ConvertedFromCurrency *string `json:"convertedFromCurrency"`
	ConvertedFromValue    *string `json:"convertedFromValue"`
	Currency              *string `json:"currency"`
	ExchangeRate          *string `json:"exchangeRate"`
	Value                 *string `json:"value"`
}
