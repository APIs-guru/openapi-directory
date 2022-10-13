package shared

type GlobalExplanation struct {
	ClassLabel   *string       `json:"classLabel"`
	Explanations []Explanation `json:"explanations"`
}
