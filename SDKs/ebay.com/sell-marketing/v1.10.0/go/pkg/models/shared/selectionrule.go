package shared

// SelectionRule
// This type specifies the selection rules used to create a campaign.
type SelectionRule struct {
	Brands              []string `json:"brands,omitempty"`
	CategoryIds         []string `json:"categoryIds,omitempty"`
	CategoryScope       *string  `json:"categoryScope,omitempty"`
	ListingConditionIds []string `json:"listingConditionIds,omitempty"`
	MaxPrice            *Amount  `json:"maxPrice,omitempty"`
	MinPrice            *Amount  `json:"minPrice,omitempty"`
}
