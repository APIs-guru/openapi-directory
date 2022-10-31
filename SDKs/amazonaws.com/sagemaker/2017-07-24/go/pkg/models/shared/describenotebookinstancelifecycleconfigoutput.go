package shared

import (
"time")

type DescribeNotebookInstanceLifecycleConfigOutput struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    NotebookInstanceLifecycleConfigArn *string `json:"NotebookInstanceLifecycleConfigArn,omitempty"`
    NotebookInstanceLifecycleConfigName *string `json:"NotebookInstanceLifecycleConfigName,omitempty"`
    OnCreate []NotebookInstanceLifecycleHook `json:"OnCreate,omitempty"`
    OnStart []NotebookInstanceLifecycleHook `json:"OnStart,omitempty"`
    
}

