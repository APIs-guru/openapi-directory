package shared

import (
"time")

type DescribeNotebookInstanceOutput struct {
    AcceleratorTypes []NotebookInstanceAcceleratorTypeEnum `json:"AcceleratorTypes,omitempty"`
    AdditionalCodeRepositories []string `json:"AdditionalCodeRepositories,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    DefaultCodeRepository *string `json:"DefaultCodeRepository,omitempty"`
    DirectInternetAccess *DirectInternetAccessEnum `json:"DirectInternetAccess,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    InstanceType *InstanceTypeEnum `json:"InstanceType,omitempty"`
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    NetworkInterfaceID *string `json:"NetworkInterfaceId,omitempty"`
    NotebookInstanceArn *string `json:"NotebookInstanceArn,omitempty"`
    NotebookInstanceLifecycleConfigName *string `json:"NotebookInstanceLifecycleConfigName,omitempty"`
    NotebookInstanceName *string `json:"NotebookInstanceName,omitempty"`
    NotebookInstanceStatus *NotebookInstanceStatusEnum `json:"NotebookInstanceStatus,omitempty"`
    PlatformIdentifier *string `json:"PlatformIdentifier,omitempty"`
    RoleArn *string `json:"RoleArn,omitempty"`
    RootAccess *RootAccessEnum `json:"RootAccess,omitempty"`
    SecurityGroups []string `json:"SecurityGroups,omitempty"`
    SubnetID *string `json:"SubnetId,omitempty"`
    URL *string `json:"Url,omitempty"`
    VolumeSizeInGb *int64 `json:"VolumeSizeInGB,omitempty"`
    
}

