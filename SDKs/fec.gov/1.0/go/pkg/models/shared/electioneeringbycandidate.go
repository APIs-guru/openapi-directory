package shared

type ElectioneeringByCandidate struct {
	Candidate     *string  `json:"candidate"`
	CandidateID   *string  `json:"candidate_id"`
	CandidateName *string  `json:"candidate_name"`
	Committee     *string  `json:"committee"`
	CommitteeID   *string  `json:"committee_id"`
	CommitteeName *string  `json:"committee_name"`
	Count         *int32   `json:"count"`
	Cycle         *int32   `json:"cycle"`
	Total         *float64 `json:"total"`
}
