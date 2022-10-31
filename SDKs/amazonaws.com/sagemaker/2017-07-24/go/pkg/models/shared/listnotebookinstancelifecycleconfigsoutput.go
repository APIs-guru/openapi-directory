package shared



type ListNotebookInstanceLifecycleConfigsOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    NotebookInstanceLifecycleConfigs []NotebookInstanceLifecycleConfigSummary `json:"NotebookInstanceLifecycleConfigs,omitempty"`
    
}

