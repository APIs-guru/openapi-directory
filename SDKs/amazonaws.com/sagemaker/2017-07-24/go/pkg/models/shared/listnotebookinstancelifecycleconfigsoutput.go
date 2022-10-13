package shared

type ListNotebookInstanceLifecycleConfigsOutput struct {
	NextToken                        *string                                  `json:"NextToken"`
	NotebookInstanceLifecycleConfigs []NotebookInstanceLifecycleConfigSummary `json:"NotebookInstanceLifecycleConfigs"`
}
