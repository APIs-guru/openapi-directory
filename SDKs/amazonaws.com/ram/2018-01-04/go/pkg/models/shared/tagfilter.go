package shared

// TagFilter
// Used to filter information based on tags.
type TagFilter struct {
	TagKey    *string  `json:"tagKey,omitempty"`
	TagValues []string `json:"tagValues,omitempty"`
}
