package shared

// TagFilter
// A list of tags (keys and values) that are used to specify the associated resources.
type TagFilter struct {
	Key    *string  `json:"Key,omitempty"`
	Values []string `json:"Values,omitempty"`
}
