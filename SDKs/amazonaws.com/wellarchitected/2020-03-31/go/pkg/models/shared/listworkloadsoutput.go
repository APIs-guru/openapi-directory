package shared

type ListWorkloadsOutput struct {
	NextToken         *string           `json:"NextToken"`
	WorkloadSummaries []WorkloadSummary `json:"WorkloadSummaries"`
}
