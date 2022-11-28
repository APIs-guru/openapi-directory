package shared

// TagOptionSummary
// Summary information about a TagOption.
type TagOptionSummary struct {
	Key    *string  `json:"Key,omitempty"`
	Values []string `json:"Values,omitempty"`
}
