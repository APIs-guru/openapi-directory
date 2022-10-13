package shared

type PresidentialCoveragePage struct {
	Pagination *OffsetInfo            `json:"pagination"`
	Results    []PresidentialCoverage `json:"results"`
}
