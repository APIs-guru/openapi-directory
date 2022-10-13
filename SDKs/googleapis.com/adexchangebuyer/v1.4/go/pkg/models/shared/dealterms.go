package shared

type DealTerms struct {
	BrandingType                  *string                                `json:"brandingType"`
	CrossListedExternalDealIDType *string                                `json:"crossListedExternalDealIdType"`
	Description                   *string                                `json:"description"`
	EstimatedGrossSpend           *Price                                 `json:"estimatedGrossSpend"`
	EstimatedImpressionsPerDay    *string                                `json:"estimatedImpressionsPerDay"`
	GuaranteedFixedPriceTerms     *DealTermsGuaranteedFixedPriceTerms    `json:"guaranteedFixedPriceTerms"`
	NonGuaranteedAuctionTerms     *DealTermsNonGuaranteedAuctionTerms    `json:"nonGuaranteedAuctionTerms"`
	NonGuaranteedFixedPriceTerms  *DealTermsNonGuaranteedFixedPriceTerms `json:"nonGuaranteedFixedPriceTerms"`
	RubiconNonGuaranteedTerms     *DealTermsRubiconNonGuaranteedTerms    `json:"rubiconNonGuaranteedTerms"`
	SellerTimeZone                *string                                `json:"sellerTimeZone"`
}
