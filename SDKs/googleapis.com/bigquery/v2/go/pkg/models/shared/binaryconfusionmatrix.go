package shared

type BinaryConfusionMatrix struct {
	Accuracy               *float64 `json:"accuracy"`
	F1Score                *float64 `json:"f1Score"`
	FalseNegatives         *string  `json:"falseNegatives"`
	FalsePositives         *string  `json:"falsePositives"`
	PositiveClassThreshold *float64 `json:"positiveClassThreshold"`
	Precision              *float64 `json:"precision"`
	Recall                 *float64 `json:"recall"`
	TrueNegatives          *string  `json:"trueNegatives"`
	TruePositives          *string  `json:"truePositives"`
}
