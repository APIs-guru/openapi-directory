package shared

import (
	"time"
)

type NotebookInstanceSummary struct {
	AdditionalCodeRepositories          []string                    `json:"AdditionalCodeRepositories"`
	CreationTime                        *time.Time                  `json:"CreationTime"`
	DefaultCodeRepository               *string                     `json:"DefaultCodeRepository"`
	InstanceType                        *InstanceTypeEnum           `json:"InstanceType"`
	LastModifiedTime                    *time.Time                  `json:"LastModifiedTime"`
	NotebookInstanceArn                 string                      `json:"NotebookInstanceArn"`
	NotebookInstanceLifecycleConfigName *string                     `json:"NotebookInstanceLifecycleConfigName"`
	NotebookInstanceName                string                      `json:"NotebookInstanceName"`
	NotebookInstanceStatus              *NotebookInstanceStatusEnum `json:"NotebookInstanceStatus"`
	URL                                 *string                     `json:"Url"`
}
