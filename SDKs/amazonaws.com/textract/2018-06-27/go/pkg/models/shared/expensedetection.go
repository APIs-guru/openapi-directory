package shared

// ExpenseDetection
// An object used to store information about the Value or Label detected by Amazon Textract.
type ExpenseDetection struct {
	Confidence *float32  `json:"Confidence,omitempty"`
	Geometry   *Geometry `json:"Geometry,omitempty"`
	Text       *string   `json:"Text,omitempty"`
}
