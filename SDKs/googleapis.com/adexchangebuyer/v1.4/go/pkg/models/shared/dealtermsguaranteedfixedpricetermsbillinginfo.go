package shared



type DealTermsGuaranteedFixedPriceTermsBillingInfo struct {
    CurrencyConversionTimeMs *string `json:"currencyConversionTimeMs,omitempty"`
    DfpLineItemID *string `json:"dfpLineItemId,omitempty"`
    OriginalContractedQuantity *string `json:"originalContractedQuantity,omitempty"`
    Price *Price `json:"price,omitempty"`
    
}

