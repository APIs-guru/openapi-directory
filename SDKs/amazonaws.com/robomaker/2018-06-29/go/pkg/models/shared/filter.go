package shared

// Filter
// Information about a filter.
type Filter struct {
	Name   *string  `json:"name,omitempty"`
	Values []string `json:"values,omitempty"`
}
