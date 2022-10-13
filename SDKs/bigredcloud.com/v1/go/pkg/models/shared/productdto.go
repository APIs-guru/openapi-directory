package shared

type ProductDto struct {
	Details           []string `json:"details"`
	GrossUnitPrice    *bool    `json:"grossUnitPrice"`
	HasDefaultVatRate *bool    `json:"hasDefaultVatRate"`
	ID                *int64   `json:"id"`
	StockCode         *string  `json:"stockCode"`
	Timestamp         *string  `json:"timestamp"`
	UnitPrice         *float64 `json:"unitPrice"`
	VatAnalysisTypeID *int64   `json:"vatAnalysisTypeId"`
	VatRateID         *int64   `json:"vatRateId"`
}
