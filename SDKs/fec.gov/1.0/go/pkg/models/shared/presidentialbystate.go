package shared



type PresidentialByState struct {
    CandidateID *string `json:"candidate_id,omitempty"`
    ContributionReceiptAmount *float64 `json:"contribution_receipt_amount,omitempty"`
    ContributionState *string `json:"contribution_state,omitempty"`
    ElectionYear *int32 `json:"election_year,omitempty"`
    
}

