package shared

type PredictedItem struct {
	ItemID *string  `json:"itemId"`
	Score  *float64 `json:"score"`
}
