package shared

// PredictedItem
// <p>An object that identifies an item.</p> <p>The and APIs return a list of <code>PredictedItem</code>s.</p>
type PredictedItem struct {
	ItemID *string  `json:"itemId,omitempty"`
	Score  *float64 `json:"score,omitempty"`
}
