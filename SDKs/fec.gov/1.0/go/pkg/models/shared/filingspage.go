package shared

type FilingsPage struct {
	Pagination *OffsetInfo `json:"pagination"`
	Results    []Filings   `json:"results"`
}
