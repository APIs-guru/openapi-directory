package shared

// ConfusionMatrix
// Confusion matrix for multi-class classification models.
type ConfusionMatrix struct {
	ConfidenceThreshold *float64 `json:"confidenceThreshold,omitempty"`
	Rows                []Row    `json:"rows,omitempty"`
}
