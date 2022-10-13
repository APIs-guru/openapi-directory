package shared

type ScrapeResult struct {
	Count    *int64                   `json:"count"`
	Cursor   *string                  `json:"cursor"`
	Items    []map[string]interface{} `json:"items"`
	Previous *string                  `json:"previous"`
	Total    *int64                   `json:"total"`
}
