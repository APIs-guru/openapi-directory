package shared

import (
	"time"
)

// NotebookInstanceLifecycleConfigSummary
// Provides a summary of a notebook instance lifecycle configuration.
type NotebookInstanceLifecycleConfigSummary struct {
	CreationTime                        *time.Time `json:"CreationTime,omitempty"`
	LastModifiedTime                    *time.Time `json:"LastModifiedTime,omitempty"`
	NotebookInstanceLifecycleConfigArn  string     `json:"NotebookInstanceLifecycleConfigArn"`
	NotebookInstanceLifecycleConfigName string     `json:"NotebookInstanceLifecycleConfigName"`
}
