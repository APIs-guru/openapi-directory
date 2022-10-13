package shared

type UpdateNotebookInstanceLifecycleConfigInput struct {
	NotebookInstanceLifecycleConfigName string                          `json:"NotebookInstanceLifecycleConfigName"`
	OnCreate                            []NotebookInstanceLifecycleHook `json:"OnCreate"`
	OnStart                             []NotebookInstanceLifecycleHook `json:"OnStart"`
}
