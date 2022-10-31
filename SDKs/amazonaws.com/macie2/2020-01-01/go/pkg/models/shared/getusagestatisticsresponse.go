package shared



type GetUsageStatisticsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Records []UsageRecord `json:"records,omitempty"`
    TimeRange *TimeRangeEnum `json:"timeRange,omitempty"`
    
}

