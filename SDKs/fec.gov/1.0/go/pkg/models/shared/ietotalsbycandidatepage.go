package shared

type IeTotalsByCandidatePage struct {
	Pagination *OffsetInfo           `json:"pagination"`
	Results    []IeTotalsByCandidate `json:"results"`
}
