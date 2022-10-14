package shared

import (
	"time"
)

type NotebookInstanceSummary struct {
	AdditionalCodeRepositories          []string                    `json:"AdditionalCodeRepositories,omitempty"`
	CreationTime                        *time.Time                  `json:"CreationTime,omitempty"`
	DefaultCodeRepository               *string                     `json:"DefaultCodeRepository,omitempty"`
	InstanceType                        *InstanceTypeEnum           `json:"InstanceType,omitempty"`
	LastModifiedTime                    *time.Time                  `json:"LastModifiedTime,omitempty"`
	NotebookInstanceArn                 string                      `json:"NotebookInstanceArn"`
	NotebookInstanceLifecycleConfigName *string                     `json:"NotebookInstanceLifecycleConfigName,omitempty"`
	NotebookInstanceName                string                      `json:"NotebookInstanceName"`
	NotebookInstanceStatus              *NotebookInstanceStatusEnum `json:"NotebookInstanceStatus,omitempty"`
	URL                                 *string                     `json:"Url,omitempty"`
}
