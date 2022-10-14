package shared

type ElectioneeringByCandidatePage struct {
	Pagination *OffsetInfo                 `json:"pagination,omitempty"`
	Results    []ElectioneeringByCandidate `json:"results,omitempty"`
}
