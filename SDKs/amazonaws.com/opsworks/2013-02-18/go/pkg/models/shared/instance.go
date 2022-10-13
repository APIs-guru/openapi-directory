package shared

type Instance struct {
	AgentVersion             *string                 `json:"AgentVersion"`
	AmiID                    *string                 `json:"AmiId"`
	Architecture             *ArchitectureEnum       `json:"Architecture"`
	Arn                      *string                 `json:"Arn"`
	AutoScalingType          *AutoScalingTypeEnum    `json:"AutoScalingType"`
	AvailabilityZone         *string                 `json:"AvailabilityZone"`
	BlockDeviceMappings      []BlockDeviceMapping    `json:"BlockDeviceMappings"`
	CreatedAt                *string                 `json:"CreatedAt"`
	EbsOptimized             *bool                   `json:"EbsOptimized"`
	Ec2InstanceID            *string                 `json:"Ec2InstanceId"`
	EcsClusterArn            *string                 `json:"EcsClusterArn"`
	EcsContainerInstanceArn  *string                 `json:"EcsContainerInstanceArn"`
	ElasticIP                *string                 `json:"ElasticIp"`
	Hostname                 *string                 `json:"Hostname"`
	InfrastructureClass      *string                 `json:"InfrastructureClass"`
	InstallUpdatesOnBoot     *bool                   `json:"InstallUpdatesOnBoot"`
	InstanceID               *string                 `json:"InstanceId"`
	InstanceProfileArn       *string                 `json:"InstanceProfileArn"`
	InstanceType             *string                 `json:"InstanceType"`
	LastServiceErrorID       *string                 `json:"LastServiceErrorId"`
	LayerIds                 []string                `json:"LayerIds"`
	Os                       *string                 `json:"Os"`
	Platform                 *string                 `json:"Platform"`
	PrivateDNS               *string                 `json:"PrivateDns"`
	PrivateIP                *string                 `json:"PrivateIp"`
	PublicDNS                *string                 `json:"PublicDns"`
	PublicIP                 *string                 `json:"PublicIp"`
	RegisteredBy             *string                 `json:"RegisteredBy"`
	ReportedAgentVersion     *string                 `json:"ReportedAgentVersion"`
	ReportedOs               *ReportedOs             `json:"ReportedOs"`
	RootDeviceType           *RootDeviceTypeEnum     `json:"RootDeviceType"`
	RootDeviceVolumeID       *string                 `json:"RootDeviceVolumeId"`
	SecurityGroupIds         []string                `json:"SecurityGroupIds"`
	SSHHostDsaKeyFingerprint *string                 `json:"SshHostDsaKeyFingerprint"`
	SSHHostRsaKeyFingerprint *string                 `json:"SshHostRsaKeyFingerprint"`
	SSHKeyName               *string                 `json:"SshKeyName"`
	StackID                  *string                 `json:"StackId"`
	Status                   *string                 `json:"Status"`
	SubnetID                 *string                 `json:"SubnetId"`
	Tenancy                  *string                 `json:"Tenancy"`
	VirtualizationType       *VirtualizationTypeEnum `json:"VirtualizationType"`
}
