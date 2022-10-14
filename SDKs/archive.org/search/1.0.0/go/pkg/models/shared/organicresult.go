package shared

type OrganicResult struct {
	Count *int64                   `json:"count,omitempty"`
	Items []map[string]interface{} `json:"items,omitempty"`
	Total *int64                   `json:"total,omitempty"`
}
