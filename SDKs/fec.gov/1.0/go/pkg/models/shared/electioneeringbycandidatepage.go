package shared

type ElectioneeringByCandidatePage struct {
	Pagination *OffsetInfo                 `json:"pagination"`
	Results    []ElectioneeringByCandidate `json:"results"`
}
