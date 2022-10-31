package shared

type ListWorkflowsResponse struct {
	NextToken *string          `json:"NextToken,omitempty"`
	Workflows []ListedWorkflow `json:"Workflows"`
}
