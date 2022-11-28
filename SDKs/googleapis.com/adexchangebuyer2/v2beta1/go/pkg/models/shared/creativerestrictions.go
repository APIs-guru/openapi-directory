package shared

type CreativeRestrictionsCreativeFormatEnum string

const (
	CreativeRestrictionsCreativeFormatEnumCreativeFormatUnspecified CreativeRestrictionsCreativeFormatEnum = "CREATIVE_FORMAT_UNSPECIFIED"
	CreativeRestrictionsCreativeFormatEnumDisplay                   CreativeRestrictionsCreativeFormatEnum = "DISPLAY"
	CreativeRestrictionsCreativeFormatEnumVideo                     CreativeRestrictionsCreativeFormatEnum = "VIDEO"
)

type CreativeRestrictionsSkippableAdTypeEnum string

const (
	CreativeRestrictionsSkippableAdTypeEnumSkippableAdTypeUnspecified CreativeRestrictionsSkippableAdTypeEnum = "SKIPPABLE_AD_TYPE_UNSPECIFIED"
	CreativeRestrictionsSkippableAdTypeEnumSkippable                  CreativeRestrictionsSkippableAdTypeEnum = "SKIPPABLE"
	CreativeRestrictionsSkippableAdTypeEnumInstreamSelect             CreativeRestrictionsSkippableAdTypeEnum = "INSTREAM_SELECT"
	CreativeRestrictionsSkippableAdTypeEnumNotSkippable               CreativeRestrictionsSkippableAdTypeEnum = "NOT_SKIPPABLE"
)

// CreativeRestrictions
// Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals.
type CreativeRestrictions struct {
	CreativeFormat         *CreativeRestrictionsCreativeFormatEnum  `json:"creativeFormat,omitempty"`
	CreativeSpecifications []CreativeSpecification                  `json:"creativeSpecifications,omitempty"`
	SkippableAdType        *CreativeRestrictionsSkippableAdTypeEnum `json:"skippableAdType,omitempty"`
}
