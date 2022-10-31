package shared

type ListHumanLoopsResponse struct {
	HumanLoopSummaries []HumanLoopSummary `json:"HumanLoopSummaries"`
	NextToken          *string            `json:"NextToken,omitempty"`
}
