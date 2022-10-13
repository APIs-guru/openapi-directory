package shared

type AggregateClassificationMetrics struct {
	Accuracy  *float64 `json:"accuracy"`
	F1Score   *float64 `json:"f1Score"`
	LogLoss   *float64 `json:"logLoss"`
	Precision *float64 `json:"precision"`
	Recall    *float64 `json:"recall"`
	RocAuc    *float64 `json:"rocAuc"`
	Threshold *float64 `json:"threshold"`
}
