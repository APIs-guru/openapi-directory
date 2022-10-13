package shared

type CandidatePage struct {
	Pagination *OffsetInfo `json:"pagination"`
	Results    []Candidate `json:"results"`
}
