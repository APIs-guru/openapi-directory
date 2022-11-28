package shared

// GlobalExplanation
// Global explanations containing the top most important features after training.
type GlobalExplanation struct {
	ClassLabel   *string       `json:"classLabel,omitempty"`
	Explanations []Explanation `json:"explanations,omitempty"`
}
