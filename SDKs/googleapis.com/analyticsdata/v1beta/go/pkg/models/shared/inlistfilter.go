package shared

// InListFilter
// The result needs to be in a list of string values.
type InListFilter struct {
	CaseSensitive *bool    `json:"caseSensitive,omitempty"`
	Values        []string `json:"values,omitempty"`
}
