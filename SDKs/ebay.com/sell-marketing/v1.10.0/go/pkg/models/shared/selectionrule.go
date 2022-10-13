package shared

type SelectionRule struct {
	Brands              []string `json:"brands"`
	CategoryIds         []string `json:"categoryIds"`
	CategoryScope       *string  `json:"categoryScope"`
	ListingConditionIds []string `json:"listingConditionIds"`
	MaxPrice            *Amount  `json:"maxPrice"`
	MinPrice            *Amount  `json:"minPrice"`
}
