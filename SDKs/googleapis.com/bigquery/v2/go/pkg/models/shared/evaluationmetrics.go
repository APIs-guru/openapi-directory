package shared

type EvaluationMetrics struct {
	ArimaForecastingMetrics         *ArimaForecastingMetrics         `json:"arimaForecastingMetrics"`
	BinaryClassificationMetrics     *BinaryClassificationMetrics     `json:"binaryClassificationMetrics"`
	ClusteringMetrics               *ClusteringMetrics               `json:"clusteringMetrics"`
	DimensionalityReductionMetrics  *DimensionalityReductionMetrics  `json:"dimensionalityReductionMetrics"`
	MultiClassClassificationMetrics *MultiClassClassificationMetrics `json:"multiClassClassificationMetrics"`
	RankingMetrics                  *RankingMetrics                  `json:"rankingMetrics"`
	RegressionMetrics               *RegressionMetrics               `json:"regressionMetrics"`
}
