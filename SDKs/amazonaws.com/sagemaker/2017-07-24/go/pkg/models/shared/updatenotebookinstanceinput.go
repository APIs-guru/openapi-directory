package shared

type UpdateNotebookInstanceInput struct {
	AcceleratorTypes                       []NotebookInstanceAcceleratorTypeEnum `json:"AcceleratorTypes,omitempty"`
	AdditionalCodeRepositories             []string                              `json:"AdditionalCodeRepositories,omitempty"`
	DefaultCodeRepository                  *string                               `json:"DefaultCodeRepository,omitempty"`
	DisassociateAcceleratorTypes           *bool                                 `json:"DisassociateAcceleratorTypes,omitempty"`
	DisassociateAdditionalCodeRepositories *bool                                 `json:"DisassociateAdditionalCodeRepositories,omitempty"`
	DisassociateDefaultCodeRepository      *bool                                 `json:"DisassociateDefaultCodeRepository,omitempty"`
	DisassociateLifecycleConfig            *bool                                 `json:"DisassociateLifecycleConfig,omitempty"`
	InstanceType                           *InstanceTypeEnum                     `json:"InstanceType,omitempty"`
	LifecycleConfigName                    *string                               `json:"LifecycleConfigName,omitempty"`
	NotebookInstanceName                   string                                `json:"NotebookInstanceName"`
	RoleArn                                *string                               `json:"RoleArn,omitempty"`
	RootAccess                             *RootAccessEnum                       `json:"RootAccess,omitempty"`
	VolumeSizeInGb                         *int64                                `json:"VolumeSizeInGB,omitempty"`
}
