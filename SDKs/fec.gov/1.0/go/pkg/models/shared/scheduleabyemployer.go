package shared



type ScheduleAByEmployer struct {
    CommitteeID string `json:"committee_id"`
    Count *int32 `json:"count,omitempty"`
    Cycle int32 `json:"cycle"`
    Employer string `json:"employer"`
    Total *float64 `json:"total,omitempty"`
    
}

