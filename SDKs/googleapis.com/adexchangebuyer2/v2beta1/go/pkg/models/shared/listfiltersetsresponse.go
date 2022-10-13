package shared

type ListFilterSetsResponse struct {
	FilterSets    []FilterSet `json:"filterSets"`
	NextPageToken *string     `json:"nextPageToken"`
}
