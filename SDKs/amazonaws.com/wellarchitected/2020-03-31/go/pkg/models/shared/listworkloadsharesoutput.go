package shared

type ListWorkloadSharesOutput struct {
	NextToken              *string                `json:"NextToken"`
	WorkloadID             *string                `json:"WorkloadId"`
	WorkloadShareSummaries []WorkloadShareSummary `json:"WorkloadShareSummaries"`
}
