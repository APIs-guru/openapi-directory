package shared

// AggregateClassificationMetrics
// Aggregate metrics for classification/classifier models. For multi-class models, the metrics are either macro-averaged or micro-averaged. When macro-averaged, the metrics are calculated for each label and then an unweighted average is taken of those values. When micro-averaged, the metric is calculated globally by counting the total number of correctly predicted rows.
type AggregateClassificationMetrics struct {
	Accuracy  *float64 `json:"accuracy,omitempty"`
	F1Score   *float64 `json:"f1Score,omitempty"`
	LogLoss   *float64 `json:"logLoss,omitempty"`
	Precision *float64 `json:"precision,omitempty"`
	Recall    *float64 `json:"recall,omitempty"`
	RocAuc    *float64 `json:"rocAuc,omitempty"`
	Threshold *float64 `json:"threshold,omitempty"`
}
