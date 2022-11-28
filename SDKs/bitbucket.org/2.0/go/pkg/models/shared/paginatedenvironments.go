package shared

// PaginatedEnvironments
// A paged list of environments
type PaginatedEnvironments struct {
	Next     *string                  `json:"next,omitempty"`
	Page     *int64                   `json:"page,omitempty"`
	Pagelen  *int64                   `json:"pagelen,omitempty"`
	Previous *string                  `json:"previous,omitempty"`
	Size     *int64                   `json:"size,omitempty"`
	Values   []map[string]interface{} `json:"values,omitempty"`
}
