package shared

type CreateNotebookInstanceLifecycleConfigInput struct {
	NotebookInstanceLifecycleConfigName string                          `json:"NotebookInstanceLifecycleConfigName"`
	OnCreate                            []NotebookInstanceLifecycleHook `json:"OnCreate,omitempty"`
	OnStart                             []NotebookInstanceLifecycleHook `json:"OnStart,omitempty"`
}
