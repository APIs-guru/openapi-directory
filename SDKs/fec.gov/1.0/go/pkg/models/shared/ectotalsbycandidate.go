package shared

type EcTotalsByCandidate struct {
	CandidateID *string  `json:"candidate_id,omitempty"`
	Cycle       *int32   `json:"cycle,omitempty"`
	Total       *float64 `json:"total,omitempty"`
}
