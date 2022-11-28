package shared

// TagFilter
// Used to filter the workflow executions in visibility APIs based on a tag.
type TagFilter struct {
	Tag string `json:"tag"`
}
