package shared

// MetaCursors
// Cursors to navigate to previous or next pages through the API
type MetaCursors struct {
	Current  *string `json:"current,omitempty"`
	Next     *string `json:"next,omitempty"`
	Previous *string `json:"previous,omitempty"`
}

// Meta
// Response metadata
type Meta struct {
	Cursors     *MetaCursors `json:"cursors,omitempty"`
	ItemsOnPage *int64       `json:"items_on_page,omitempty"`
}
