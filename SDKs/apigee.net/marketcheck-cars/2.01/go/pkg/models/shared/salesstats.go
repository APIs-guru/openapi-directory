package shared

type SalesStats struct {
	AbsoluteMeanDeviation       *float64 `json:"absolute_mean_deviation"`
	Iqr                         *float64 `json:"iqr"`
	Mean                        *float64 `json:"mean"`
	Median                      *float64 `json:"median"`
	PopulationStandardDeviation *float64 `json:"population_standard_deviation"`
	StandardDeviation           *float64 `json:"standard_deviation"`
	TrimmedMean                 *float64 `json:"trimmed_mean"`
	Variance                    *float64 `json:"variance"`
	WeightedMean                *float64 `json:"weighted_mean"`
}
