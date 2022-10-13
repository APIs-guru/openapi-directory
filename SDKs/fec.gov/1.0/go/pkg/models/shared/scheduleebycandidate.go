package shared

type ScheduleEByCandidate struct {
	CandidateID            *string  `json:"candidate_id"`
	CandidateName          *string  `json:"candidate_name"`
	CommitteeID            *string  `json:"committee_id"`
	CommitteeName          *string  `json:"committee_name"`
	Count                  *int32   `json:"count"`
	Cycle                  int32    `json:"cycle"`
	SupportOpposeIndicator string   `json:"support_oppose_indicator"`
	Total                  *float64 `json:"total"`
}
