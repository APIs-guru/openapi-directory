package shared

// Filters
// A filter collection lists filters created by users in an Analytics account. Each resource in the collection corresponds to a filter.
type Filters struct {
	Items        []Filter `json:"items,omitempty"`
	ItemsPerPage *int32   `json:"itemsPerPage,omitempty"`
	Kind         *string  `json:"kind,omitempty"`
	NextLink     *string  `json:"nextLink,omitempty"`
	PreviousLink *string  `json:"previousLink,omitempty"`
	StartIndex   *int32   `json:"startIndex,omitempty"`
	TotalResults *int32   `json:"totalResults,omitempty"`
	Username     *string  `json:"username,omitempty"`
}
