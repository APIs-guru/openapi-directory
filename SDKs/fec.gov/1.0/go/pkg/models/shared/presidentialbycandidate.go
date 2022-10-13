package shared

type PresidentialByCandidate struct {
	CandidateID               *string  `json:"candidate_id"`
	CandidateLastName         *string  `json:"candidate_last_name"`
	CandidatePartyAffiliation *string  `json:"candidate_party_affiliation"`
	ContributorState          *string  `json:"contributor_state"`
	ElectionYear              *int32   `json:"election_year"`
	NetReceipts               *float64 `json:"net_receipts"`
	RoundedNetReceipts        *float64 `json:"rounded_net_receipts"`
}
