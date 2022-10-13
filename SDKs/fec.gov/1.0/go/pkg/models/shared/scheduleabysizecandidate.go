package shared

type ScheduleABySizeCandidate struct {
	CandidateID *string  `json:"candidate_id"`
	Count       *int32   `json:"count"`
	Cycle       *int32   `json:"cycle"`
	Size        *int32   `json:"size"`
	Total       *float64 `json:"total"`
}
