package shared

type EcTotalsByCandidatePage struct {
	Pagination *OffsetInfo           `json:"pagination"`
	Results    []EcTotalsByCandidate `json:"results"`
}
