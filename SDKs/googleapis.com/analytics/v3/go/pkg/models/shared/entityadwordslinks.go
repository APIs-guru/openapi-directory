package shared

// EntityAdWordsLinks
// An entity Google Ads link collection provides a list of GA-Google Ads links Each resource in this collection corresponds to a single link.
type EntityAdWordsLinks struct {
	Items        []EntityAdWordsLink `json:"items,omitempty"`
	ItemsPerPage *int32              `json:"itemsPerPage,omitempty"`
	Kind         *string             `json:"kind,omitempty"`
	NextLink     *string             `json:"nextLink,omitempty"`
	PreviousLink *string             `json:"previousLink,omitempty"`
	StartIndex   *int32              `json:"startIndex,omitempty"`
	TotalResults *int32              `json:"totalResults,omitempty"`
}
