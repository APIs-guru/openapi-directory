package shared

type CommitteeTotalsPage struct {
	Pagination *OffsetInfo       `json:"pagination,omitempty"`
	Results    []CommitteeTotals `json:"results,omitempty"`
}
