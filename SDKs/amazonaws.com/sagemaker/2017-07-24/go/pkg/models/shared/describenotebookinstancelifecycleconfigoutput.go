package shared

import (
	"time"
)

type DescribeNotebookInstanceLifecycleConfigOutput struct {
	CreationTime                        *time.Time                      `json:"CreationTime"`
	LastModifiedTime                    *time.Time                      `json:"LastModifiedTime"`
	NotebookInstanceLifecycleConfigArn  *string                         `json:"NotebookInstanceLifecycleConfigArn"`
	NotebookInstanceLifecycleConfigName *string                         `json:"NotebookInstanceLifecycleConfigName"`
	OnCreate                            []NotebookInstanceLifecycleHook `json:"OnCreate"`
	OnStart                             []NotebookInstanceLifecycleHook `json:"OnStart"`
}
