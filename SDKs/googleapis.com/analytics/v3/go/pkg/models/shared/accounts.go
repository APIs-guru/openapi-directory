package shared

// Accounts
// An account collection provides a list of Analytics accounts to which a user has access. The account collection is the entry point to all management information. Each resource in the collection corresponds to a single Analytics account.
type Accounts struct {
	Items        []Account `json:"items,omitempty"`
	ItemsPerPage *int32    `json:"itemsPerPage,omitempty"`
	Kind         *string   `json:"kind,omitempty"`
	NextLink     *string   `json:"nextLink,omitempty"`
	PreviousLink *string   `json:"previousLink,omitempty"`
	StartIndex   *int32    `json:"startIndex,omitempty"`
	TotalResults *int32    `json:"totalResults,omitempty"`
	Username     *string   `json:"username,omitempty"`
}
