package shared

type CommitteePage struct {
	Pagination *OffsetInfo `json:"pagination,omitempty"`
	Results    []Committee `json:"results,omitempty"`
}
