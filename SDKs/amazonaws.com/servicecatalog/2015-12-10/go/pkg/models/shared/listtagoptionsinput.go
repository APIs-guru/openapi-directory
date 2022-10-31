package shared

type ListTagOptionsInput struct {
	Filters   *ListTagOptionsFilters `json:"Filters,omitempty"`
	PageSize  *int64                 `json:"PageSize,omitempty"`
	PageToken *string                `json:"PageToken,omitempty"`
}
