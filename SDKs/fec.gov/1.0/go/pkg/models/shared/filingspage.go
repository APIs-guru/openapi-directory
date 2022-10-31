package shared

type FilingsPage struct {
	Pagination *OffsetInfo `json:"pagination,omitempty"`
	Results    []Filings   `json:"results,omitempty"`
}
