package shared

type CommitteeTotalsPage struct {
	Pagination *OffsetInfo       `json:"pagination"`
	Results    []CommitteeTotals `json:"results"`
}
