package shared

type CcTotalsByCandidatePage struct {
	Pagination *OffsetInfo           `json:"pagination"`
	Results    []CcTotalsByCandidate `json:"results"`
}
