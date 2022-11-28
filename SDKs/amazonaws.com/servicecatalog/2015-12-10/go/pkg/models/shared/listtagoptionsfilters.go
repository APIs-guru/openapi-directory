package shared

// ListTagOptionsFilters
// Filters to use when listing TagOptions.
type ListTagOptionsFilters struct {
	Active *bool   `json:"Active,omitempty"`
	Key    *string `json:"Key,omitempty"`
	Value  *string `json:"Value,omitempty"`
}
