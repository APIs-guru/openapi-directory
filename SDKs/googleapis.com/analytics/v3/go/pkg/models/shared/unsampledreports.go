package shared

// UnsampledReports
// An unsampled report collection lists Analytics unsampled reports to which the user has access. Each view (profile) can have a set of unsampled reports. Each resource in the unsampled report collection corresponds to a single Analytics unsampled report.
type UnsampledReports struct {
	Items        []UnsampledReport `json:"items,omitempty"`
	ItemsPerPage *int32            `json:"itemsPerPage,omitempty"`
	Kind         *string           `json:"kind,omitempty"`
	NextLink     *string           `json:"nextLink,omitempty"`
	PreviousLink *string           `json:"previousLink,omitempty"`
	StartIndex   *int32            `json:"startIndex,omitempty"`
	TotalResults *int32            `json:"totalResults,omitempty"`
	Username     *string           `json:"username,omitempty"`
}
