package shared

type EvaluationMetrics struct {
	ArimaForecastingMetrics         *ArimaForecastingMetrics         `json:"arimaForecastingMetrics,omitempty"`
	BinaryClassificationMetrics     *BinaryClassificationMetrics     `json:"binaryClassificationMetrics,omitempty"`
	ClusteringMetrics               *ClusteringMetrics               `json:"clusteringMetrics,omitempty"`
	DimensionalityReductionMetrics  *DimensionalityReductionMetrics  `json:"dimensionalityReductionMetrics,omitempty"`
	MultiClassClassificationMetrics *MultiClassClassificationMetrics `json:"multiClassClassificationMetrics,omitempty"`
	RankingMetrics                  *RankingMetrics                  `json:"rankingMetrics,omitempty"`
	RegressionMetrics               *RegressionMetrics               `json:"regressionMetrics,omitempty"`
}
