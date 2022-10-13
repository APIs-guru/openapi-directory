package shared

type UpdateNotebookInstanceInput struct {
	AcceleratorTypes                       []NotebookInstanceAcceleratorTypeEnum `json:"AcceleratorTypes"`
	AdditionalCodeRepositories             []string                              `json:"AdditionalCodeRepositories"`
	DefaultCodeRepository                  *string                               `json:"DefaultCodeRepository"`
	DisassociateAcceleratorTypes           *bool                                 `json:"DisassociateAcceleratorTypes"`
	DisassociateAdditionalCodeRepositories *bool                                 `json:"DisassociateAdditionalCodeRepositories"`
	DisassociateDefaultCodeRepository      *bool                                 `json:"DisassociateDefaultCodeRepository"`
	DisassociateLifecycleConfig            *bool                                 `json:"DisassociateLifecycleConfig"`
	InstanceType                           *InstanceTypeEnum                     `json:"InstanceType"`
	LifecycleConfigName                    *string                               `json:"LifecycleConfigName"`
	NotebookInstanceName                   string                                `json:"NotebookInstanceName"`
	RoleArn                                *string                               `json:"RoleArn"`
	RootAccess                             *RootAccessEnum                       `json:"RootAccess"`
	VolumeSizeInGb                         *int64                                `json:"VolumeSizeInGB"`
}
