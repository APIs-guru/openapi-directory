package shared



type PresidentialByCandidate struct {
    CandidateID *string `json:"candidate_id,omitempty"`
    CandidateLastName *string `json:"candidate_last_name,omitempty"`
    CandidatePartyAffiliation *string `json:"candidate_party_affiliation,omitempty"`
    ContributorState *string `json:"contributor_state,omitempty"`
    ElectionYear *int32 `json:"election_year,omitempty"`
    NetReceipts *float64 `json:"net_receipts,omitempty"`
    RoundedNetReceipts *float64 `json:"rounded_net_receipts,omitempty"`
    
}

