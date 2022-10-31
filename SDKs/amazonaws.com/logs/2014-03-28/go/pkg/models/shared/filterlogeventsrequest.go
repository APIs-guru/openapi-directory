package shared



type FilterLogEventsRequest struct {
    EndTime *int64 `json:"endTime,omitempty"`
    FilterPattern *string `json:"filterPattern,omitempty"`
    Interleaved *bool `json:"interleaved,omitempty"`
    Limit *int64 `json:"limit,omitempty"`
    LogGroupName string `json:"logGroupName"`
    LogStreamNamePrefix *string `json:"logStreamNamePrefix,omitempty"`
    LogStreamNames []string `json:"logStreamNames,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    StartTime *int64 `json:"startTime,omitempty"`
    
}

