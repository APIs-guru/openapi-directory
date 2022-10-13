package shared

type TagFilter struct {
	TagKey    *string  `json:"tagKey"`
	TagValues []string `json:"tagValues"`
}
