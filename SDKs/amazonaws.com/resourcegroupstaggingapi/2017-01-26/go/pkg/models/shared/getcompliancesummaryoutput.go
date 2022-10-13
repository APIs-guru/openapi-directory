package shared

type GetComplianceSummaryOutput struct {
	PaginationToken *string   `json:"PaginationToken"`
	SummaryList     []Summary `json:"SummaryList"`
}
