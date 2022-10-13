package shared

type CommunicationCostByCandidatePage struct {
	Pagination *OffsetInfo                    `json:"pagination"`
	Results    []CommunicationCostByCandidate `json:"results"`
}
