package shared

type Money struct {
	CurrencyCode *string `json:"currencyCode"`
	Nanos        *int32  `json:"nanos"`
	Units        *string `json:"units"`
}
