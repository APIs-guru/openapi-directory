package shared

type UpdateNotebookInstanceLifecycleConfigInput struct {
	NotebookInstanceLifecycleConfigName string                          `json:"NotebookInstanceLifecycleConfigName"`
	OnCreate                            []NotebookInstanceLifecycleHook `json:"OnCreate,omitempty"`
	OnStart                             []NotebookInstanceLifecycleHook `json:"OnStart,omitempty"`
}
