package shared

type ListFilterSetsResponse struct {
	FilterSets    []FilterSet `json:"filterSets,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
