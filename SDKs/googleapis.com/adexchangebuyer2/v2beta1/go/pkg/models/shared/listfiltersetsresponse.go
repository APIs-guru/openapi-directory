package shared

// ListFilterSetsResponse
// Response message for listing filter sets.
type ListFilterSetsResponse struct {
	FilterSets    []FilterSet `json:"filterSets,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
