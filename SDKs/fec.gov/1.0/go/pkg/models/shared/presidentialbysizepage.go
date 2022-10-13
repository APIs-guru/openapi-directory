package shared

type PresidentialBySizePage struct {
	Pagination *OffsetInfo          `json:"pagination"`
	Results    []PresidentialBySize `json:"results"`
}
