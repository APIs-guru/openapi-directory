package shared

type CandidateHistoryTotalPage struct {
	Pagination *OffsetInfo             `json:"pagination"`
	Results    []CandidateHistoryTotal `json:"results"`
}
