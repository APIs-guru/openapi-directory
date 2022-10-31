package shared



type ScheduleABySizeCandidate struct {
    CandidateID *string `json:"candidate_id,omitempty"`
    Count *int32 `json:"count,omitempty"`
    Cycle *int32 `json:"cycle,omitempty"`
    Size *int32 `json:"size,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

