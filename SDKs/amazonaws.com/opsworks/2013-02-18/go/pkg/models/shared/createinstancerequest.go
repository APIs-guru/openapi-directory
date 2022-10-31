package shared



type CreateInstanceRequest struct {
    AgentVersion *string `json:"AgentVersion,omitempty"`
    AmiID *string `json:"AmiId,omitempty"`
    Architecture *ArchitectureEnum `json:"Architecture,omitempty"`
    AutoScalingType *AutoScalingTypeEnum `json:"AutoScalingType,omitempty"`
    AvailabilityZone *string `json:"AvailabilityZone,omitempty"`
    BlockDeviceMappings []BlockDeviceMapping `json:"BlockDeviceMappings,omitempty"`
    EbsOptimized *bool `json:"EbsOptimized,omitempty"`
    Hostname *string `json:"Hostname,omitempty"`
    InstallUpdatesOnBoot *bool `json:"InstallUpdatesOnBoot,omitempty"`
    InstanceType string `json:"InstanceType"`
    LayerIds []string `json:"LayerIds"`
    Os *string `json:"Os,omitempty"`
    RootDeviceType *RootDeviceTypeEnum `json:"RootDeviceType,omitempty"`
    SSHKeyName *string `json:"SshKeyName,omitempty"`
    StackID string `json:"StackId"`
    SubnetID *string `json:"SubnetId,omitempty"`
    Tenancy *string `json:"Tenancy,omitempty"`
    VirtualizationType *string `json:"VirtualizationType,omitempty"`
    
}

