package shared

type DealTermsGuaranteedFixedPriceTermsBillingInfo struct {
	CurrencyConversionTimeMs   *string `json:"currencyConversionTimeMs"`
	DfpLineItemID              *string `json:"dfpLineItemId"`
	OriginalContractedQuantity *string `json:"originalContractedQuantity"`
	Price                      *Price  `json:"price"`
}
