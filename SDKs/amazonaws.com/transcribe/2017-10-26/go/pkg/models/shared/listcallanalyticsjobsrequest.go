package shared



type ListCallAnalyticsJobsRequest struct {
    JobNameContains *string `json:"JobNameContains,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Status *CallAnalyticsJobStatusEnum `json:"Status,omitempty"`
    
}

