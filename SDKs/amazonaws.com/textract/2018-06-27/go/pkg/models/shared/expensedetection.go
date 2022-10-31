package shared

type ExpenseDetection struct {
	Confidence *float32  `json:"Confidence,omitempty"`
	Geometry   *Geometry `json:"Geometry,omitempty"`
	Text       *string   `json:"Text,omitempty"`
}
