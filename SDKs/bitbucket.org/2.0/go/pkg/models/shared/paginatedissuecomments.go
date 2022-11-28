package shared

// PaginatedIssueComments
// A paginated list of issue comments.
type PaginatedIssueComments struct {
	Next     *string                  `json:"next,omitempty"`
	Page     *int64                   `json:"page,omitempty"`
	Pagelen  *int64                   `json:"pagelen,omitempty"`
	Previous *string                  `json:"previous,omitempty"`
	Size     *int64                   `json:"size,omitempty"`
	Values   []map[string]interface{} `json:"values,omitempty"`
}
