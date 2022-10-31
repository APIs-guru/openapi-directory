package shared



type IeTotalsByCandidate struct {
    CandidateID *string `json:"candidate_id,omitempty"`
    Cycle *int32 `json:"cycle,omitempty"`
    SupportOpposeIndicator *string `json:"support_oppose_indicator,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

