package shared

// ListWorkloadsOutput
// Output of a list workloads call.
type ListWorkloadsOutput struct {
	NextToken         *string           `json:"NextToken,omitempty"`
	WorkloadSummaries []WorkloadSummary `json:"WorkloadSummaries,omitempty"`
}
