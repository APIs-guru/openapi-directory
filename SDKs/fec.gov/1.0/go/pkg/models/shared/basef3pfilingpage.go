package shared

type BaseF3PFilingPage struct {
	Pagination *OffsetInfo     `json:"pagination,omitempty"`
	Results    []BaseF3PFiling `json:"results,omitempty"`
}
