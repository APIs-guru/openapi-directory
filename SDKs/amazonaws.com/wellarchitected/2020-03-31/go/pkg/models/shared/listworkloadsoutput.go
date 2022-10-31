package shared

type ListWorkloadsOutput struct {
	NextToken         *string           `json:"NextToken,omitempty"`
	WorkloadSummaries []WorkloadSummary `json:"WorkloadSummaries,omitempty"`
}
