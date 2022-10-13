package shared

type CurrencyList struct {
	Currencies []Currency `json:"currencies"`
	Sum        int32      `json:"sum"`
}
