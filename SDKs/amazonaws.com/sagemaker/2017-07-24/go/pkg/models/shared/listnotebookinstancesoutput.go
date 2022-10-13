package shared

type ListNotebookInstancesOutput struct {
	NextToken         *string                   `json:"NextToken"`
	NotebookInstances []NotebookInstanceSummary `json:"NotebookInstances"`
}
