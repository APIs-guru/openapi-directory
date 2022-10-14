package shared

type AggregateClassificationMetrics struct {
	Accuracy  *float64 `json:"accuracy,omitempty"`
	F1Score   *float64 `json:"f1Score,omitempty"`
	LogLoss   *float64 `json:"logLoss,omitempty"`
	Precision *float64 `json:"precision,omitempty"`
	Recall    *float64 `json:"recall,omitempty"`
	RocAuc    *float64 `json:"rocAuc,omitempty"`
	Threshold *float64 `json:"threshold,omitempty"`
}
