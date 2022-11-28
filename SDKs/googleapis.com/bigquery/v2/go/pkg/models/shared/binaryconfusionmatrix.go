package shared

// BinaryConfusionMatrix
// Confusion matrix for binary classification models.
type BinaryConfusionMatrix struct {
	Accuracy               *float64 `json:"accuracy,omitempty"`
	F1Score                *float64 `json:"f1Score,omitempty"`
	FalseNegatives         *string  `json:"falseNegatives,omitempty"`
	FalsePositives         *string  `json:"falsePositives,omitempty"`
	PositiveClassThreshold *float64 `json:"positiveClassThreshold,omitempty"`
	Precision              *float64 `json:"precision,omitempty"`
	Recall                 *float64 `json:"recall,omitempty"`
	TrueNegatives          *string  `json:"trueNegatives,omitempty"`
	TruePositives          *string  `json:"truePositives,omitempty"`
}
