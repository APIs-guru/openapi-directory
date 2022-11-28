package shared

// Uploads
// Upload collection lists Analytics uploads to which the user has access. Each custom data source can have a set of uploads. Each resource in the upload collection corresponds to a single Analytics data upload.
type Uploads struct {
	Items        []Upload `json:"items,omitempty"`
	ItemsPerPage *int32   `json:"itemsPerPage,omitempty"`
	Kind         *string  `json:"kind,omitempty"`
	NextLink     *string  `json:"nextLink,omitempty"`
	PreviousLink *string  `json:"previousLink,omitempty"`
	StartIndex   *int32   `json:"startIndex,omitempty"`
	TotalResults *int32   `json:"totalResults,omitempty"`
}
