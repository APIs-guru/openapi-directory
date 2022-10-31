package shared



type ScheduleABySize struct {
    CommitteeID string `json:"committee_id"`
    Count *int32 `json:"count,omitempty"`
    Cycle int32 `json:"cycle"`
    Size int32 `json:"size"`
    Total *float64 `json:"total,omitempty"`
    
}

