package shared

type DealTermsBrandingTypeEnum string

const (
	DealTermsBrandingTypeEnumBrandingTypeUnspecified DealTermsBrandingTypeEnum = "BRANDING_TYPE_UNSPECIFIED"
	DealTermsBrandingTypeEnumBranded                 DealTermsBrandingTypeEnum = "BRANDED"
	DealTermsBrandingTypeEnumSemiTransparent         DealTermsBrandingTypeEnum = "SEMI_TRANSPARENT"
)

// DealTerms
// The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher.
type DealTerms struct {
	BrandingType                 *DealTermsBrandingTypeEnum    `json:"brandingType,omitempty"`
	Description                  *string                       `json:"description,omitempty"`
	EstimatedGrossSpend          *Price                        `json:"estimatedGrossSpend,omitempty"`
	EstimatedImpressionsPerDay   *string                       `json:"estimatedImpressionsPerDay,omitempty"`
	GuaranteedFixedPriceTerms    *GuaranteedFixedPriceTerms    `json:"guaranteedFixedPriceTerms,omitempty"`
	NonGuaranteedAuctionTerms    *NonGuaranteedAuctionTerms    `json:"nonGuaranteedAuctionTerms,omitempty"`
	NonGuaranteedFixedPriceTerms *NonGuaranteedFixedPriceTerms `json:"nonGuaranteedFixedPriceTerms,omitempty"`
	SellerTimeZone               *string                       `json:"sellerTimeZone,omitempty"`
}
