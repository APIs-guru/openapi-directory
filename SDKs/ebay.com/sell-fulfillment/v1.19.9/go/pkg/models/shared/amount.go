package shared

type Amount struct {
	ConvertedFromCurrency *string `json:"convertedFromCurrency"`
	ConvertedFromValue    *string `json:"convertedFromValue"`
	Currency              *string `json:"currency"`
	Value                 *string `json:"value"`
}
