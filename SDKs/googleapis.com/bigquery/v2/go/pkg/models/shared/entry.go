package shared

// Entry
// A single entry in the confusion matrix.
type Entry struct {
	ItemCount      *string `json:"itemCount,omitempty"`
	PredictedLabel *string `json:"predictedLabel,omitempty"`
}
