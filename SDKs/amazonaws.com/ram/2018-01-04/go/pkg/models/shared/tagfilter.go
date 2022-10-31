package shared

type TagFilter struct {
	TagKey    *string  `json:"tagKey,omitempty"`
	TagValues []string `json:"tagValues,omitempty"`
}
