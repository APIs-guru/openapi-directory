package shared

type GetTimeSeriesServiceStatisticsResult struct {
	ContainsOldGroupVersions    *bool                         `json:"ContainsOldGroupVersions"`
	NextToken                   *string                       `json:"NextToken"`
	TimeSeriesServiceStatistics []TimeSeriesServiceStatistics `json:"TimeSeriesServiceStatistics"`
}
