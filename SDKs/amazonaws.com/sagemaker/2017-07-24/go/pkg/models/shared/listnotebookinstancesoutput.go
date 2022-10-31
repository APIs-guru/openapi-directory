package shared



type ListNotebookInstancesOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    NotebookInstances []NotebookInstanceSummary `json:"NotebookInstances,omitempty"`
    
}

