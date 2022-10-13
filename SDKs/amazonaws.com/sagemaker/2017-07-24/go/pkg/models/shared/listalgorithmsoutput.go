package shared

type ListAlgorithmsOutput struct {
	AlgorithmSummaryList []AlgorithmSummary `json:"AlgorithmSummaryList"`
	NextToken            *string            `json:"NextToken"`
}
