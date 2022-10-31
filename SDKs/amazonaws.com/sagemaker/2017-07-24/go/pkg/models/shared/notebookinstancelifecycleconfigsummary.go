package shared

import (
	"time"
)

type NotebookInstanceLifecycleConfigSummary struct {
	CreationTime                        *time.Time `json:"CreationTime,omitempty"`
	LastModifiedTime                    *time.Time `json:"LastModifiedTime,omitempty"`
	NotebookInstanceLifecycleConfigArn  string     `json:"NotebookInstanceLifecycleConfigArn"`
	NotebookInstanceLifecycleConfigName string     `json:"NotebookInstanceLifecycleConfigName"`
}
