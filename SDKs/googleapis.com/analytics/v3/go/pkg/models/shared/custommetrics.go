package shared

// CustomMetrics
// A custom metric collection lists Analytics custom metrics to which the user has access. Each resource in the collection corresponds to a single Analytics custom metric.
type CustomMetrics struct {
	Items        []CustomMetric `json:"items,omitempty"`
	ItemsPerPage *int32         `json:"itemsPerPage,omitempty"`
	Kind         *string        `json:"kind,omitempty"`
	NextLink     *string        `json:"nextLink,omitempty"`
	PreviousLink *string        `json:"previousLink,omitempty"`
	StartIndex   *int32         `json:"startIndex,omitempty"`
	TotalResults *int32         `json:"totalResults,omitempty"`
	Username     *string        `json:"username,omitempty"`
}
