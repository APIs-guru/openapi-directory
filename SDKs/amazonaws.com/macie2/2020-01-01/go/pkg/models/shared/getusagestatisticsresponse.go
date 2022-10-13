package shared

type GetUsageStatisticsResponse struct {
	NextToken *string        `json:"nextToken"`
	Records   []UsageRecord  `json:"records"`
	TimeRange *TimeRangeEnum `json:"timeRange"`
}
