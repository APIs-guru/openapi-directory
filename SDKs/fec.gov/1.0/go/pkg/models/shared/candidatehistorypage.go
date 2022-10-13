package shared

type CandidateHistoryPage struct {
	Pagination *OffsetInfo        `json:"pagination"`
	Results    []CandidateHistory `json:"results"`
}
