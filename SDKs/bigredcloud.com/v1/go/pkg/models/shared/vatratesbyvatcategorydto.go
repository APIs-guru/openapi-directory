package shared



type VatRatesByVatCategoryDto struct {
    VatCategoryID *int64 `json:"vatCategoryId,omitempty"`
    VatRates []VatRateDto `json:"vatRates,omitempty"`
    
}

