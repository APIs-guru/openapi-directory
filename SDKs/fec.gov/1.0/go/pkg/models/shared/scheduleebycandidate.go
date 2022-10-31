package shared

type ScheduleEByCandidate struct {
	CandidateID            *string  `json:"candidate_id,omitempty"`
	CandidateName          *string  `json:"candidate_name,omitempty"`
	CommitteeID            *string  `json:"committee_id,omitempty"`
	CommitteeName          *string  `json:"committee_name,omitempty"`
	Count                  *int32   `json:"count,omitempty"`
	Cycle                  int32    `json:"cycle"`
	SupportOpposeIndicator string   `json:"support_oppose_indicator"`
	Total                  *float64 `json:"total,omitempty"`
}
