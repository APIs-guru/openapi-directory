package shared

type ProfitAndLossRecord struct {
	ID    *string  `json:"id"`
	Title *string  `json:"title"`
	Type  string   `json:"type"`
	Value *float64 `json:"value"`
}
