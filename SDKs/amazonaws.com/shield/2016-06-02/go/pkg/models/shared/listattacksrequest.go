package shared



type ListAttacksRequest struct {
    EndTime *TimeRange `json:"EndTime,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResourceArns []string `json:"ResourceArns,omitempty"`
    StartTime *TimeRange `json:"StartTime,omitempty"`
    
}

