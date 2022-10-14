package shared

type CreateNotebookInstanceInput struct {
	AcceleratorTypes           []NotebookInstanceAcceleratorTypeEnum `json:"AcceleratorTypes,omitempty"`
	AdditionalCodeRepositories []string                              `json:"AdditionalCodeRepositories,omitempty"`
	DefaultCodeRepository      *string                               `json:"DefaultCodeRepository,omitempty"`
	DirectInternetAccess       *DirectInternetAccessEnum             `json:"DirectInternetAccess,omitempty"`
	InstanceType               InstanceTypeEnum                      `json:"InstanceType"`
	KmsKeyID                   *string                               `json:"KmsKeyId,omitempty"`
	LifecycleConfigName        *string                               `json:"LifecycleConfigName,omitempty"`
	NotebookInstanceName       string                                `json:"NotebookInstanceName"`
	PlatformIdentifier         *string                               `json:"PlatformIdentifier,omitempty"`
	RoleArn                    string                                `json:"RoleArn"`
	RootAccess                 *RootAccessEnum                       `json:"RootAccess,omitempty"`
	SecurityGroupIds           []string                              `json:"SecurityGroupIds,omitempty"`
	SubnetID                   *string                               `json:"SubnetId,omitempty"`
	Tags                       []Tag                                 `json:"Tags,omitempty"`
	VolumeSizeInGb             *int64                                `json:"VolumeSizeInGB,omitempty"`
}
