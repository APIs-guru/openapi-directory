package shared

type IeTotalsByCandidate struct {
	CandidateID            *string  `json:"candidate_id"`
	Cycle                  *int32   `json:"cycle"`
	SupportOpposeIndicator *string  `json:"support_oppose_indicator"`
	Total                  *float64 `json:"total"`
}
