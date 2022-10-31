package shared



type CloneStackRequest struct {
    AgentVersion *string `json:"AgentVersion,omitempty"`
    Attributes map[string]string `json:"Attributes,omitempty"`
    ChefConfiguration *ChefConfiguration `json:"ChefConfiguration,omitempty"`
    CloneAppIds []string `json:"CloneAppIds,omitempty"`
    ClonePermissions *bool `json:"ClonePermissions,omitempty"`
    ConfigurationManager *StackConfigurationManager `json:"ConfigurationManager,omitempty"`
    CustomCookbooksSource *Source `json:"CustomCookbooksSource,omitempty"`
    CustomJSON *string `json:"CustomJson,omitempty"`
    DefaultAvailabilityZone *string `json:"DefaultAvailabilityZone,omitempty"`
    DefaultInstanceProfileArn *string `json:"DefaultInstanceProfileArn,omitempty"`
    DefaultOs *string `json:"DefaultOs,omitempty"`
    DefaultRootDeviceType *RootDeviceTypeEnum `json:"DefaultRootDeviceType,omitempty"`
    DefaultSSHKeyName *string `json:"DefaultSshKeyName,omitempty"`
    DefaultSubnetID *string `json:"DefaultSubnetId,omitempty"`
    HostnameTheme *string `json:"HostnameTheme,omitempty"`
    Name *string `json:"Name,omitempty"`
    Region *string `json:"Region,omitempty"`
    ServiceRoleArn string `json:"ServiceRoleArn"`
    SourceStackID string `json:"SourceStackId"`
    UseCustomCookbooks *bool `json:"UseCustomCookbooks,omitempty"`
    UseOpsworksSecurityGroups *bool `json:"UseOpsworksSecurityGroups,omitempty"`
    VpcID *string `json:"VpcId,omitempty"`
    
}

