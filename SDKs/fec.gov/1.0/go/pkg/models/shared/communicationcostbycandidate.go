package shared

type CommunicationCostByCandidate struct {
	Candidate              *string  `json:"candidate,omitempty"`
	CandidateID            *string  `json:"candidate_id,omitempty"`
	CandidateName          *string  `json:"candidate_name,omitempty"`
	Committee              *string  `json:"committee,omitempty"`
	CommitteeID            *string  `json:"committee_id,omitempty"`
	CommitteeName          *string  `json:"committee_name,omitempty"`
	Count                  *int32   `json:"count,omitempty"`
	Cycle                  *int32   `json:"cycle,omitempty"`
	SupportOpposeIndicator string   `json:"support_oppose_indicator"`
	Total                  *float64 `json:"total,omitempty"`
}
