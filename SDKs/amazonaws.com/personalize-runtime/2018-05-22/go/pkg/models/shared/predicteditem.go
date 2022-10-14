package shared

type PredictedItem struct {
	ItemID *string  `json:"itemId,omitempty"`
	Score  *float64 `json:"score,omitempty"`
}
