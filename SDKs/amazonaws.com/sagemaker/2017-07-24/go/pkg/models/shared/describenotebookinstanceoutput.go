package shared

import (
	"time"
)

type DescribeNotebookInstanceOutput struct {
	AcceleratorTypes                    []NotebookInstanceAcceleratorTypeEnum `json:"AcceleratorTypes"`
	AdditionalCodeRepositories          []string                              `json:"AdditionalCodeRepositories"`
	CreationTime                        *time.Time                            `json:"CreationTime"`
	DefaultCodeRepository               *string                               `json:"DefaultCodeRepository"`
	DirectInternetAccess                *DirectInternetAccessEnum             `json:"DirectInternetAccess"`
	FailureReason                       *string                               `json:"FailureReason"`
	InstanceType                        *InstanceTypeEnum                     `json:"InstanceType"`
	KmsKeyID                            *string                               `json:"KmsKeyId"`
	LastModifiedTime                    *time.Time                            `json:"LastModifiedTime"`
	NetworkInterfaceID                  *string                               `json:"NetworkInterfaceId"`
	NotebookInstanceArn                 *string                               `json:"NotebookInstanceArn"`
	NotebookInstanceLifecycleConfigName *string                               `json:"NotebookInstanceLifecycleConfigName"`
	NotebookInstanceName                *string                               `json:"NotebookInstanceName"`
	NotebookInstanceStatus              *NotebookInstanceStatusEnum           `json:"NotebookInstanceStatus"`
	PlatformIdentifier                  *string                               `json:"PlatformIdentifier"`
	RoleArn                             *string                               `json:"RoleArn"`
	RootAccess                          *RootAccessEnum                       `json:"RootAccess"`
	SecurityGroups                      []string                              `json:"SecurityGroups"`
	SubnetID                            *string                               `json:"SubnetId"`
	URL                                 *string                               `json:"Url"`
	VolumeSizeInGb                      *int64                                `json:"VolumeSizeInGB"`
}
