package shared



type ScheduleAByStateRecipientTotals struct {
    CommitteeType *string `json:"committee_type,omitempty"`
    CommitteeTypeFull *string `json:"committee_type_full,omitempty"`
    Count *int32 `json:"count,omitempty"`
    Cycle *int32 `json:"cycle,omitempty"`
    State *string `json:"state,omitempty"`
    StateFull *string `json:"state_full,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

