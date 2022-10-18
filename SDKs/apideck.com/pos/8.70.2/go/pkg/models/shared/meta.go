package shared

type MetaCursors struct {
	Current  *string `json:"current,omitempty"`
	Next     *string `json:"next,omitempty"`
	Previous *string `json:"previous,omitempty"`
}

type Meta struct {
	Cursors     *MetaCursors `json:"cursors,omitempty"`
	ItemsOnPage *int64       `json:"items_on_page,omitempty"`
}
