package shared

type CandidateDetailPage struct {
	Pagination *OffsetInfo       `json:"pagination"`
	Results    []CandidateDetail `json:"results"`
}
