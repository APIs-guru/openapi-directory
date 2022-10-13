package shared

type BaseF3FilingPage struct {
	Pagination *OffsetInfo    `json:"pagination"`
	Results    []BaseF3Filing `json:"results"`
}
