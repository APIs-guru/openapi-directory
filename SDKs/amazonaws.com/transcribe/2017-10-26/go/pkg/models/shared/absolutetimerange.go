package shared



type AbsoluteTimeRange struct {
    EndTime *int64 `json:"EndTime,omitempty"`
    First *int64 `json:"First,omitempty"`
    Last *int64 `json:"Last,omitempty"`
    StartTime *int64 `json:"StartTime,omitempty"`
    
}

