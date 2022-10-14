package shared

type UpdateStackRequest struct {
	AgentVersion              *string                    `json:"AgentVersion,omitempty"`
	Attributes                map[string]string          `json:"Attributes,omitempty"`
	ChefConfiguration         *ChefConfiguration         `json:"ChefConfiguration,omitempty"`
	ConfigurationManager      *StackConfigurationManager `json:"ConfigurationManager,omitempty"`
	CustomCookbooksSource     *Source                    `json:"CustomCookbooksSource,omitempty"`
	CustomJSON                *string                    `json:"CustomJson,omitempty"`
	DefaultAvailabilityZone   *string                    `json:"DefaultAvailabilityZone,omitempty"`
	DefaultInstanceProfileArn *string                    `json:"DefaultInstanceProfileArn,omitempty"`
	DefaultOs                 *string                    `json:"DefaultOs,omitempty"`
	DefaultRootDeviceType     *RootDeviceTypeEnum        `json:"DefaultRootDeviceType,omitempty"`
	DefaultSSHKeyName         *string                    `json:"DefaultSshKeyName,omitempty"`
	DefaultSubnetID           *string                    `json:"DefaultSubnetId,omitempty"`
	HostnameTheme             *string                    `json:"HostnameTheme,omitempty"`
	Name                      *string                    `json:"Name,omitempty"`
	ServiceRoleArn            *string                    `json:"ServiceRoleArn,omitempty"`
	StackID                   string                     `json:"StackId"`
	UseCustomCookbooks        *bool                      `json:"UseCustomCookbooks,omitempty"`
	UseOpsworksSecurityGroups *bool                      `json:"UseOpsworksSecurityGroups,omitempty"`
}
