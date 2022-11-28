package shared

// TaskCollection
// The type that defines the fields for a paginated result set of tasks. The response consists of 0 or more sequenced pages where each page has 0 or more items.
type TaskCollection struct {
	Href   *string `json:"href,omitempty"`
	Limit  *int32  `json:"limit,omitempty"`
	Next   *string `json:"next,omitempty"`
	Offset *int32  `json:"offset,omitempty"`
	Prev   *string `json:"prev,omitempty"`
	Tasks  []Task  `json:"tasks,omitempty"`
	Total  *int32  `json:"total,omitempty"`
}
