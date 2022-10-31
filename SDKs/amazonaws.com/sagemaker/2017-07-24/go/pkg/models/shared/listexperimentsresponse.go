package shared

type ListExperimentsResponse struct {
	ExperimentSummaries []ExperimentSummary `json:"ExperimentSummaries,omitempty"`
	NextToken           *string             `json:"NextToken,omitempty"`
}
