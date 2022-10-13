package shared

type ScheduleAByStateCandidate struct {
	CandidateID *string  `json:"candidate_id"`
	Count       *int32   `json:"count"`
	Cycle       *int32   `json:"cycle"`
	State       *string  `json:"state"`
	StateFull   *string  `json:"state_full"`
	Total       *float64 `json:"total"`
}
