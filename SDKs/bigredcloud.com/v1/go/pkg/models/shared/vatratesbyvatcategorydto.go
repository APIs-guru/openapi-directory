package shared

type VatRatesByVatCategoryDto struct {
	VatCategoryID *int64       `json:"vatCategoryId"`
	VatRates      []VatRateDto `json:"vatRates"`
}
