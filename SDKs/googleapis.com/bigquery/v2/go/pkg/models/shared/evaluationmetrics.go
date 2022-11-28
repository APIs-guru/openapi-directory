package shared

// EvaluationMetrics
// Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models.
type EvaluationMetrics struct {
	ArimaForecastingMetrics         *ArimaForecastingMetrics         `json:"arimaForecastingMetrics,omitempty"`
	BinaryClassificationMetrics     *BinaryClassificationMetrics     `json:"binaryClassificationMetrics,omitempty"`
	ClusteringMetrics               *ClusteringMetrics               `json:"clusteringMetrics,omitempty"`
	DimensionalityReductionMetrics  *DimensionalityReductionMetrics  `json:"dimensionalityReductionMetrics,omitempty"`
	MultiClassClassificationMetrics *MultiClassClassificationMetrics `json:"multiClassClassificationMetrics,omitempty"`
	RankingMetrics                  *RankingMetrics                  `json:"rankingMetrics,omitempty"`
	RegressionMetrics               *RegressionMetrics               `json:"regressionMetrics,omitempty"`
}
