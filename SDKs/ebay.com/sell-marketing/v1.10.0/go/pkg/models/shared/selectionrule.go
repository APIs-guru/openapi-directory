package shared

type SelectionRule struct {
	Brands              []string `json:"brands,omitempty"`
	CategoryIds         []string `json:"categoryIds,omitempty"`
	CategoryScope       *string  `json:"categoryScope,omitempty"`
	ListingConditionIds []string `json:"listingConditionIds,omitempty"`
	MaxPrice            *Amount  `json:"maxPrice,omitempty"`
	MinPrice            *Amount  `json:"minPrice,omitempty"`
}
