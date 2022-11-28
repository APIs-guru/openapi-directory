package shared

// PaginatedBranchrestrictions
// A paginated list of branch restriction rules.
type PaginatedBranchrestrictions struct {
	Next     *string                  `json:"next,omitempty"`
	Page     *int64                   `json:"page,omitempty"`
	Pagelen  *int64                   `json:"pagelen,omitempty"`
	Previous *string                  `json:"previous,omitempty"`
	Size     *int64                   `json:"size,omitempty"`
	Values   []map[string]interface{} `json:"values,omitempty"`
}
