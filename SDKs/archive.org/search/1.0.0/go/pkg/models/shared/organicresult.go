package shared

type OrganicResult struct {
	Count *int64                   `json:"count"`
	Items []map[string]interface{} `json:"items"`
	Total *int64                   `json:"total"`
}
