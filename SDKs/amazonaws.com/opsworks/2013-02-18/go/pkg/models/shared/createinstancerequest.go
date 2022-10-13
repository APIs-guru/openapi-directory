package shared

type CreateInstanceRequest struct {
	AgentVersion         *string              `json:"AgentVersion"`
	AmiID                *string              `json:"AmiId"`
	Architecture         *ArchitectureEnum    `json:"Architecture"`
	AutoScalingType      *AutoScalingTypeEnum `json:"AutoScalingType"`
	AvailabilityZone     *string              `json:"AvailabilityZone"`
	BlockDeviceMappings  []BlockDeviceMapping `json:"BlockDeviceMappings"`
	EbsOptimized         *bool                `json:"EbsOptimized"`
	Hostname             *string              `json:"Hostname"`
	InstallUpdatesOnBoot *bool                `json:"InstallUpdatesOnBoot"`
	InstanceType         string               `json:"InstanceType"`
	LayerIds             []string             `json:"LayerIds"`
	Os                   *string              `json:"Os"`
	RootDeviceType       *RootDeviceTypeEnum  `json:"RootDeviceType"`
	SSHKeyName           *string              `json:"SshKeyName"`
	StackID              string               `json:"StackId"`
	SubnetID             *string              `json:"SubnetId"`
	Tenancy              *string              `json:"Tenancy"`
	VirtualizationType   *string              `json:"VirtualizationType"`
}
