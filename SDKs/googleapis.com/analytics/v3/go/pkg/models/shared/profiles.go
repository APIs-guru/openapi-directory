package shared

// Profiles
// A view (profile) collection lists Analytics views (profiles) to which the user has access. Each resource in the collection corresponds to a single Analytics view (profile).
type Profiles struct {
	Items        []Profile `json:"items,omitempty"`
	ItemsPerPage *int32    `json:"itemsPerPage,omitempty"`
	Kind         *string   `json:"kind,omitempty"`
	NextLink     *string   `json:"nextLink,omitempty"`
	PreviousLink *string   `json:"previousLink,omitempty"`
	StartIndex   *int32    `json:"startIndex,omitempty"`
	TotalResults *int32    `json:"totalResults,omitempty"`
	Username     *string   `json:"username,omitempty"`
}
