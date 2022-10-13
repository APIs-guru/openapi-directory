package shared

type CreateNotebookInstanceInput struct {
	AcceleratorTypes           []NotebookInstanceAcceleratorTypeEnum `json:"AcceleratorTypes"`
	AdditionalCodeRepositories []string                              `json:"AdditionalCodeRepositories"`
	DefaultCodeRepository      *string                               `json:"DefaultCodeRepository"`
	DirectInternetAccess       *DirectInternetAccessEnum             `json:"DirectInternetAccess"`
	InstanceType               InstanceTypeEnum                      `json:"InstanceType"`
	KmsKeyID                   *string                               `json:"KmsKeyId"`
	LifecycleConfigName        *string                               `json:"LifecycleConfigName"`
	NotebookInstanceName       string                                `json:"NotebookInstanceName"`
	PlatformIdentifier         *string                               `json:"PlatformIdentifier"`
	RoleArn                    string                                `json:"RoleArn"`
	RootAccess                 *RootAccessEnum                       `json:"RootAccess"`
	SecurityGroupIds           []string                              `json:"SecurityGroupIds"`
	SubnetID                   *string                               `json:"SubnetId"`
	Tags                       []Tag                                 `json:"Tags"`
	VolumeSizeInGb             *int64                                `json:"VolumeSizeInGB"`
}
