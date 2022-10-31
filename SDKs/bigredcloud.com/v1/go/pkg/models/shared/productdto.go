package shared



type ProductDto struct {
    Details []string `json:"details,omitempty"`
    GrossUnitPrice *bool `json:"grossUnitPrice,omitempty"`
    HasDefaultVatRate *bool `json:"hasDefaultVatRate,omitempty"`
    ID *int64 `json:"id,omitempty"`
    StockCode *string `json:"stockCode,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    UnitPrice *float64 `json:"unitPrice,omitempty"`
    VatAnalysisTypeID *int64 `json:"vatAnalysisTypeId,omitempty"`
    VatRateID *int64 `json:"vatRateId,omitempty"`
    
}

