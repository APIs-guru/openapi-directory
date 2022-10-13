package shared

type BaseF3PFilingPage struct {
	Pagination *OffsetInfo     `json:"pagination"`
	Results    []BaseF3PFiling `json:"results"`
}
