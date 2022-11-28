package shared

// PaginatedHookEvents
// A paginated list of webhook types available to subscribe on.
type PaginatedHookEvents struct {
	Next     *string     `json:"next,omitempty"`
	Page     *int64      `json:"page,omitempty"`
	Pagelen  *int64      `json:"pagelen,omitempty"`
	Previous *string     `json:"previous,omitempty"`
	Size     *int64      `json:"size,omitempty"`
	Values   []HookEvent `json:"values,omitempty"`
}
