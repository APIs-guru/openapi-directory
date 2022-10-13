package shared

type ListFiltersResponse struct {
	Filters   []FilterSummary `json:"Filters"`
	NextToken *string         `json:"nextToken"`
}
