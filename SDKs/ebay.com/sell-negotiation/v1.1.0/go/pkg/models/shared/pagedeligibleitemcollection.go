package shared

// PagedEligibleItemCollection
// This complex type defines a collection of listings that are eligible for an offer to a buyer.
type PagedEligibleItemCollection struct {
	EligibleItems []EligibleItem `json:"eligibleItems,omitempty"`
	Href          *string        `json:"href,omitempty"`
	Limit         *int32         `json:"limit,omitempty"`
	Next          *string        `json:"next,omitempty"`
	Offset        *int32         `json:"offset,omitempty"`
	Prev          *string        `json:"prev,omitempty"`
	Total         *int32         `json:"total,omitempty"`
}
