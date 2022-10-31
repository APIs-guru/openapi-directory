package shared



type ScheduleBByPurpose struct {
    CommitteeID string `json:"committee_id"`
    Count *int32 `json:"count,omitempty"`
    Cycle int32 `json:"cycle"`
    MemoCount *int32 `json:"memo_count,omitempty"`
    MemoTotal *float64 `json:"memo_total,omitempty"`
    Purpose string `json:"purpose"`
    Total *float64 `json:"total,omitempty"`
    
}

