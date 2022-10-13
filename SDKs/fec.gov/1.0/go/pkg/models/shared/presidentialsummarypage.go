package shared

type PresidentialSummaryPage struct {
	Pagination *OffsetInfo           `json:"pagination"`
	Results    []PresidentialSummary `json:"results"`
}
