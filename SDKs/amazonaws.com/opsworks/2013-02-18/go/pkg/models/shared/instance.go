package shared



type Instance struct {
    AgentVersion *string `json:"AgentVersion,omitempty"`
    AmiID *string `json:"AmiId,omitempty"`
    Architecture *ArchitectureEnum `json:"Architecture,omitempty"`
    Arn *string `json:"Arn,omitempty"`
    AutoScalingType *AutoScalingTypeEnum `json:"AutoScalingType,omitempty"`
    AvailabilityZone *string `json:"AvailabilityZone,omitempty"`
    BlockDeviceMappings []BlockDeviceMapping `json:"BlockDeviceMappings,omitempty"`
    CreatedAt *string `json:"CreatedAt,omitempty"`
    EbsOptimized *bool `json:"EbsOptimized,omitempty"`
    Ec2InstanceID *string `json:"Ec2InstanceId,omitempty"`
    EcsClusterArn *string `json:"EcsClusterArn,omitempty"`
    EcsContainerInstanceArn *string `json:"EcsContainerInstanceArn,omitempty"`
    ElasticIP *string `json:"ElasticIp,omitempty"`
    Hostname *string `json:"Hostname,omitempty"`
    InfrastructureClass *string `json:"InfrastructureClass,omitempty"`
    InstallUpdatesOnBoot *bool `json:"InstallUpdatesOnBoot,omitempty"`
    InstanceID *string `json:"InstanceId,omitempty"`
    InstanceProfileArn *string `json:"InstanceProfileArn,omitempty"`
    InstanceType *string `json:"InstanceType,omitempty"`
    LastServiceErrorID *string `json:"LastServiceErrorId,omitempty"`
    LayerIds []string `json:"LayerIds,omitempty"`
    Os *string `json:"Os,omitempty"`
    Platform *string `json:"Platform,omitempty"`
    PrivateDNS *string `json:"PrivateDns,omitempty"`
    PrivateIP *string `json:"PrivateIp,omitempty"`
    PublicDNS *string `json:"PublicDns,omitempty"`
    PublicIP *string `json:"PublicIp,omitempty"`
    RegisteredBy *string `json:"RegisteredBy,omitempty"`
    ReportedAgentVersion *string `json:"ReportedAgentVersion,omitempty"`
    ReportedOs *ReportedOs `json:"ReportedOs,omitempty"`
    RootDeviceType *RootDeviceTypeEnum `json:"RootDeviceType,omitempty"`
    RootDeviceVolumeID *string `json:"RootDeviceVolumeId,omitempty"`
    SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
    SSHHostDsaKeyFingerprint *string `json:"SshHostDsaKeyFingerprint,omitempty"`
    SSHHostRsaKeyFingerprint *string `json:"SshHostRsaKeyFingerprint,omitempty"`
    SSHKeyName *string `json:"SshKeyName,omitempty"`
    StackID *string `json:"StackId,omitempty"`
    Status *string `json:"Status,omitempty"`
    SubnetID *string `json:"SubnetId,omitempty"`
    Tenancy *string `json:"Tenancy,omitempty"`
    VirtualizationType *VirtualizationTypeEnum `json:"VirtualizationType,omitempty"`
    
}

