package shared

type PresidentialBySizePage struct {
	Pagination *OffsetInfo          `json:"pagination,omitempty"`
	Results    []PresidentialBySize `json:"results,omitempty"`
}
