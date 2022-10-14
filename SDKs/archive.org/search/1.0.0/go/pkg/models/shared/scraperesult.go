package shared

type ScrapeResult struct {
	Count    *int64                   `json:"count,omitempty"`
	Cursor   *string                  `json:"cursor,omitempty"`
	Items    []map[string]interface{} `json:"items,omitempty"`
	Previous *string                  `json:"previous,omitempty"`
	Total    *int64                   `json:"total,omitempty"`
}
