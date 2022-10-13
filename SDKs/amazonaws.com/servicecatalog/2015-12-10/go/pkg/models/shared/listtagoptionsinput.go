package shared

type ListTagOptionsInput struct {
	Filters   *ListTagOptionsFilters `json:"Filters"`
	PageSize  *int64                 `json:"PageSize"`
	PageToken *string                `json:"PageToken"`
}
