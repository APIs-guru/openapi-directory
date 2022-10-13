package shared

type DealTermsBrandingTypeEnum string

const (
	DealTermsBrandingTypeEnumBrandingTypeUnspecified DealTermsBrandingTypeEnum = "BRANDING_TYPE_UNSPECIFIED"
	DealTermsBrandingTypeEnumBranded                 DealTermsBrandingTypeEnum = "BRANDED"
	DealTermsBrandingTypeEnumSemiTransparent         DealTermsBrandingTypeEnum = "SEMI_TRANSPARENT"
)

type DealTerms struct {
	BrandingType                 *DealTermsBrandingTypeEnum    `json:"brandingType"`
	Description                  *string                       `json:"description"`
	EstimatedGrossSpend          *Price                        `json:"estimatedGrossSpend"`
	EstimatedImpressionsPerDay   *string                       `json:"estimatedImpressionsPerDay"`
	GuaranteedFixedPriceTerms    *GuaranteedFixedPriceTerms    `json:"guaranteedFixedPriceTerms"`
	NonGuaranteedAuctionTerms    *NonGuaranteedAuctionTerms    `json:"nonGuaranteedAuctionTerms"`
	NonGuaranteedFixedPriceTerms *NonGuaranteedFixedPriceTerms `json:"nonGuaranteedFixedPriceTerms"`
	SellerTimeZone               *string                       `json:"sellerTimeZone"`
}
