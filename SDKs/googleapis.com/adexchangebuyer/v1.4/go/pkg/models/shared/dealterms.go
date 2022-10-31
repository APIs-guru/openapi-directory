package shared

type DealTerms struct {
	BrandingType                  *string                                `json:"brandingType,omitempty"`
	CrossListedExternalDealIDType *string                                `json:"crossListedExternalDealIdType,omitempty"`
	Description                   *string                                `json:"description,omitempty"`
	EstimatedGrossSpend           *Price                                 `json:"estimatedGrossSpend,omitempty"`
	EstimatedImpressionsPerDay    *string                                `json:"estimatedImpressionsPerDay,omitempty"`
	GuaranteedFixedPriceTerms     *DealTermsGuaranteedFixedPriceTerms    `json:"guaranteedFixedPriceTerms,omitempty"`
	NonGuaranteedAuctionTerms     *DealTermsNonGuaranteedAuctionTerms    `json:"nonGuaranteedAuctionTerms,omitempty"`
	NonGuaranteedFixedPriceTerms  *DealTermsNonGuaranteedFixedPriceTerms `json:"nonGuaranteedFixedPriceTerms,omitempty"`
	RubiconNonGuaranteedTerms     *DealTermsRubiconNonGuaranteedTerms    `json:"rubiconNonGuaranteedTerms,omitempty"`
	SellerTimeZone                *string                                `json:"sellerTimeZone,omitempty"`
}
