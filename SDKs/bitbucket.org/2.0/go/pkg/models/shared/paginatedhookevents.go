package shared

type PaginatedHookEvents struct {
	Next     *string     `json:"next"`
	Page     *int64      `json:"page"`
	Pagelen  *int64      `json:"pagelen"`
	Previous *string     `json:"previous"`
	Size     *int64      `json:"size"`
	Values   []HookEvent `json:"values"`
}
