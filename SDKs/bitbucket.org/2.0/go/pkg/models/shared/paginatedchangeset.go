package shared

type PaginatedChangeset struct {
	Next     *string                  `json:"next"`
	Page     *int64                   `json:"page"`
	Pagelen  *int64                   `json:"pagelen"`
	Previous *string                  `json:"previous"`
	Size     *int64                   `json:"size"`
	Values   []map[string]interface{} `json:"values"`
}
