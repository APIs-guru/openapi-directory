package shared

// ParameterStringFilter
// One or more filters. Use a filter to return a more specific list of results.
type ParameterStringFilter struct {
	Key    string   `json:"Key"`
	Option *string  `json:"Option,omitempty"`
	Values []string `json:"Values,omitempty"`
}
