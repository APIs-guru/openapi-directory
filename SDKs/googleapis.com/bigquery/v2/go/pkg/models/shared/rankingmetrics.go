package shared

type RankingMetrics struct {
	AverageRank                        *float64 `json:"averageRank"`
	MeanAveragePrecision               *float64 `json:"meanAveragePrecision"`
	MeanSquaredError                   *float64 `json:"meanSquaredError"`
	NormalizedDiscountedCumulativeGain *float64 `json:"normalizedDiscountedCumulativeGain"`
}
