package shared

type DailyStatsNestedJSON struct {
	InterquartileRange          *float64 `json:"interquartile_range"`
	Mean                        *float64 `json:"mean"`
	Median                      *float64 `json:"median"`
	PopulationStandardDeviation *float64 `json:"population_standard_deviation"`
	StandardDeviation           *float64 `json:"standard_deviation"`
	TrimmedMean                 *float64 `json:"trimmed_mean"`
	Variance                    *float64 `json:"variance"`
}
