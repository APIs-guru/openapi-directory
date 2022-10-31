package shared

type GetTimeSeriesServiceStatisticsResult struct {
	ContainsOldGroupVersions    *bool                         `json:"ContainsOldGroupVersions,omitempty"`
	NextToken                   *string                       `json:"NextToken,omitempty"`
	TimeSeriesServiceStatistics []TimeSeriesServiceStatistics `json:"TimeSeriesServiceStatistics,omitempty"`
}
