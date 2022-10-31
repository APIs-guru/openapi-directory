package shared



type DailyStatsNestedJSON struct {
    InterquartileRange *float64 `json:"interquartile_range,omitempty"`
    Mean *float64 `json:"mean,omitempty"`
    Median *float64 `json:"median,omitempty"`
    PopulationStandardDeviation *float64 `json:"population_standard_deviation,omitempty"`
    StandardDeviation *float64 `json:"standard_deviation,omitempty"`
    TrimmedMean *float64 `json:"trimmed_mean,omitempty"`
    Variance *float64 `json:"variance,omitempty"`
    
}

