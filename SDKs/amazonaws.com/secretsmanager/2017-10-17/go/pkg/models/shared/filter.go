package shared

// Filter
// Allows you to add filters when you use the search function in Secrets Manager.
type Filter struct {
	Key    *FilterNameStringTypeEnum `json:"Key,omitempty"`
	Values []string                  `json:"Values,omitempty"`
}
