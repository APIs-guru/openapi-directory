package shared

type CommitteePage struct {
	Pagination *OffsetInfo `json:"pagination"`
	Results    []Committee `json:"results"`
}
