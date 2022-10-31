package shared



type OwnerOpeningBalanceVatEntryDto struct {
    Amount *float64 `json:"amount,omitempty"`
    VatRateID *int64 `json:"vatRateId,omitempty"`
    
}

