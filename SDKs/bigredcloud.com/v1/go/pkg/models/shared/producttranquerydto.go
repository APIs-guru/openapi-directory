package shared



type ProductTranQueryDto struct {
    AcEntries []AcEntryDto `json:"acEntries,omitempty"`
    Amount *float64 `json:"amount,omitempty"`
    AmountNet *float64 `json:"amountNet,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Percentage *float64 `json:"percentage,omitempty"`
    ProductCode *string `json:"productCode,omitempty"`
    ProductID *int64 `json:"productId,omitempty"`
    Quantity *float64 `json:"quantity,omitempty"`
    TranNotes []string `json:"tranNotes,omitempty"`
    UnitPrice *float64 `json:"unitPrice,omitempty"`
    Vat *float64 `json:"vat,omitempty"`
    VatAnalysisTypeID *int64 `json:"vatAnalysisTypeId,omitempty"`
    VatRateID *int64 `json:"vatRateId,omitempty"`
    
}

