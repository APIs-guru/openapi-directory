package shared

type ProfitAndLossRecord struct {
	ID    *string  `json:"id,omitempty"`
	Title *string  `json:"title,omitempty"`
	Type  string   `json:"type"`
	Value *float64 `json:"value,omitempty"`
}
