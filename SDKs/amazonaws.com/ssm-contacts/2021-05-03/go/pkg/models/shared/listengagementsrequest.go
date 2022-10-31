package shared



type ListEngagementsRequest struct {
    IncidentID *string `json:"IncidentId,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    TimeRangeValue *TimeRange `json:"TimeRangeValue,omitempty"`
    
}

