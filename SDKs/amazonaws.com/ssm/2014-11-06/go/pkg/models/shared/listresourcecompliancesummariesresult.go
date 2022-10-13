package shared

type ListResourceComplianceSummariesResult struct {
	NextToken                      *string                         `json:"NextToken"`
	ResourceComplianceSummaryItems []ResourceComplianceSummaryItem `json:"ResourceComplianceSummaryItems"`
}
