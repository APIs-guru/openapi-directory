package shared

type ProfitAndLossSection struct {
	ID      *string       `json:"id"`
	Records []interface{} `json:"records"`
	Title   *string       `json:"title"`
	Total   *float64      `json:"total"`
	Type    string        `json:"type"`
}
