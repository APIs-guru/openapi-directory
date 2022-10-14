package shared

type GlobalExplanation struct {
	ClassLabel   *string       `json:"classLabel,omitempty"`
	Explanations []Explanation `json:"explanations,omitempty"`
}
