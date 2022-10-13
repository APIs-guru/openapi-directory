package shared

type MetaCursors struct {
	Current  *string `json:"current"`
	Next     *string `json:"next"`
	Previous *string `json:"previous"`
}

type Meta struct {
	Cursors     *MetaCursors `json:"cursors"`
	ItemsOnPage *int64       `json:"items_on_page"`
}
