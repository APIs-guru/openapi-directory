package shared

type ListWorkflowsResponse struct {
	NextToken *string          `json:"NextToken"`
	Workflows []ListedWorkflow `json:"Workflows"`
}
