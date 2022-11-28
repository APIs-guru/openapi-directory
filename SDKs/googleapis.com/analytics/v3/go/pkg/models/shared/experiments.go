package shared

// Experiments
// An experiment collection lists Analytics experiments to which the user has access. Each view (profile) can have a set of experiments. Each resource in the Experiment collection corresponds to a single Analytics experiment.
type Experiments struct {
	Items        []Experiment `json:"items,omitempty"`
	ItemsPerPage *int32       `json:"itemsPerPage,omitempty"`
	Kind         *string      `json:"kind,omitempty"`
	NextLink     *string      `json:"nextLink,omitempty"`
	PreviousLink *string      `json:"previousLink,omitempty"`
	StartIndex   *int32       `json:"startIndex,omitempty"`
	TotalResults *int32       `json:"totalResults,omitempty"`
	Username     *string      `json:"username,omitempty"`
}
