package shared

type ListFiltersResponse struct {
	Filters   []FilterSummary `json:"Filters,omitempty"`
	NextToken *string         `json:"nextToken,omitempty"`
}
