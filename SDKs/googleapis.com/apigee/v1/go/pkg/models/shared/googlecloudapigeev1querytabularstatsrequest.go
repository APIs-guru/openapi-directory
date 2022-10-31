package shared



type GoogleCloudApigeeV1QueryTabularStatsRequest struct {
    Dimensions []string `json:"dimensions,omitempty"`
    Filter *string `json:"filter,omitempty"`
    Metrics []GoogleCloudApigeeV1MetricAggregation `json:"metrics,omitempty"`
    PageSize *int32 `json:"pageSize,omitempty"`
    PageToken *string `json:"pageToken,omitempty"`
    TimeRange *GoogleTypeInterval `json:"timeRange,omitempty"`
    
}

