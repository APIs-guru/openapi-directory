package shared

type EcTotalsByCandidate struct {
	CandidateID *string  `json:"candidate_id"`
	Cycle       *int32   `json:"cycle"`
	Total       *float64 `json:"total"`
}
