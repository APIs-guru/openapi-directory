package shared

// SalesStats
// Sales stats response
type SalesStats struct {
	AbsoluteMeanDeviation       *float64 `json:"absolute_mean_deviation,omitempty"`
	Iqr                         *float64 `json:"iqr,omitempty"`
	Mean                        *float64 `json:"mean,omitempty"`
	Median                      *float64 `json:"median,omitempty"`
	PopulationStandardDeviation *float64 `json:"population_standard_deviation,omitempty"`
	StandardDeviation           *float64 `json:"standard_deviation,omitempty"`
	TrimmedMean                 *float64 `json:"trimmed_mean,omitempty"`
	Variance                    *float64 `json:"variance,omitempty"`
	WeightedMean                *float64 `json:"weighted_mean,omitempty"`
}
