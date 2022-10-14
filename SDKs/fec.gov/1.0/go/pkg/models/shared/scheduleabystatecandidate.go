package shared

type ScheduleAByStateCandidate struct {
	CandidateID *string  `json:"candidate_id,omitempty"`
	Count       *int32   `json:"count,omitempty"`
	Cycle       *int32   `json:"cycle,omitempty"`
	State       *string  `json:"state,omitempty"`
	StateFull   *string  `json:"state_full,omitempty"`
	Total       *float64 `json:"total,omitempty"`
}
