package shared



type RankingMetrics struct {
    AverageRank *float64 `json:"averageRank,omitempty"`
    MeanAveragePrecision *float64 `json:"meanAveragePrecision,omitempty"`
    MeanSquaredError *float64 `json:"meanSquaredError,omitempty"`
    NormalizedDiscountedCumulativeGain *float64 `json:"normalizedDiscountedCumulativeGain,omitempty"`
    
}

