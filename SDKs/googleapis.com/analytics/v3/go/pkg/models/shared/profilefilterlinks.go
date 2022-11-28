package shared

// ProfileFilterLinks
// A profile filter link collection lists profile filter links between profiles and filters. Each resource in the collection corresponds to a profile filter link.
type ProfileFilterLinks struct {
	Items        []ProfileFilterLink `json:"items,omitempty"`
	ItemsPerPage *int32              `json:"itemsPerPage,omitempty"`
	Kind         *string             `json:"kind,omitempty"`
	NextLink     *string             `json:"nextLink,omitempty"`
	PreviousLink *string             `json:"previousLink,omitempty"`
	StartIndex   *int32              `json:"startIndex,omitempty"`
	TotalResults *int32              `json:"totalResults,omitempty"`
	Username     *string             `json:"username,omitempty"`
}
