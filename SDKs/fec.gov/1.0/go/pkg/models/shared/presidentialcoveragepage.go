package shared

type PresidentialCoveragePage struct {
	Pagination *OffsetInfo            `json:"pagination,omitempty"`
	Results    []PresidentialCoverage `json:"results,omitempty"`
}
