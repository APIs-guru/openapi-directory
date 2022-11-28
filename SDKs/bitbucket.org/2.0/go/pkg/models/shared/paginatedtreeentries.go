package shared

// PaginatedTreeentries
// A paginated list of commit_file and/or commit_directory objects.
type PaginatedTreeentries struct {
	Next     *string                  `json:"next,omitempty"`
	Page     *int64                   `json:"page,omitempty"`
	Pagelen  *int64                   `json:"pagelen,omitempty"`
	Previous *string                  `json:"previous,omitempty"`
	Size     *int64                   `json:"size,omitempty"`
	Values   []map[string]interface{} `json:"values,omitempty"`
}
