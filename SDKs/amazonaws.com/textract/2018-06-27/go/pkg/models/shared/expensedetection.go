package shared

type ExpenseDetection struct {
	Confidence *float32  `json:"Confidence"`
	Geometry   *Geometry `json:"Geometry"`
	Text       *string   `json:"Text"`
}
