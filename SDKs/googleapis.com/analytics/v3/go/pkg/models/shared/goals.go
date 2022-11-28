package shared

// Goals
// A goal collection lists Analytics goals to which the user has access. Each view (profile) can have a set of goals. Each resource in the Goal collection corresponds to a single Analytics goal.
type Goals struct {
	Items        []Goal  `json:"items,omitempty"`
	ItemsPerPage *int32  `json:"itemsPerPage,omitempty"`
	Kind         *string `json:"kind,omitempty"`
	NextLink     *string `json:"nextLink,omitempty"`
	PreviousLink *string `json:"previousLink,omitempty"`
	StartIndex   *int32  `json:"startIndex,omitempty"`
	TotalResults *int32  `json:"totalResults,omitempty"`
	Username     *string `json:"username,omitempty"`
}
