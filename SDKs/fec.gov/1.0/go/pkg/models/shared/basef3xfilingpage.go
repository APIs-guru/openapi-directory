package shared

type BaseF3XFilingPage struct {
	Pagination *OffsetInfo     `json:"pagination"`
	Results    []BaseF3XFiling `json:"results"`
}
