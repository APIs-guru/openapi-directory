package shared

type ListExperimentsResponse struct {
	ExperimentSummaries []ExperimentSummary `json:"ExperimentSummaries"`
	NextToken           *string             `json:"NextToken"`
}
