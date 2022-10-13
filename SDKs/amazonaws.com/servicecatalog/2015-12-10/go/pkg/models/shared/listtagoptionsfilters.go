package shared

type ListTagOptionsFilters struct {
	Active *bool   `json:"Active"`
	Key    *string `json:"Key"`
	Value  *string `json:"Value"`
}
