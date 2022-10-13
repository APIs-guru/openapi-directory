package shared

import (
	"time"
)

type NotebookInstanceLifecycleConfigSummary struct {
	CreationTime                        *time.Time `json:"CreationTime"`
	LastModifiedTime                    *time.Time `json:"LastModifiedTime"`
	NotebookInstanceLifecycleConfigArn  string     `json:"NotebookInstanceLifecycleConfigArn"`
	NotebookInstanceLifecycleConfigName string     `json:"NotebookInstanceLifecycleConfigName"`
}
