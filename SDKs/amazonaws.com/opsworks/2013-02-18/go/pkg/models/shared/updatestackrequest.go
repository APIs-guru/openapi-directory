package shared

type UpdateStackRequest struct {
	AgentVersion              *string                    `json:"AgentVersion"`
	Attributes                map[string]string          `json:"Attributes"`
	ChefConfiguration         *ChefConfiguration         `json:"ChefConfiguration"`
	ConfigurationManager      *StackConfigurationManager `json:"ConfigurationManager"`
	CustomCookbooksSource     *Source                    `json:"CustomCookbooksSource"`
	CustomJSON                *string                    `json:"CustomJson"`
	DefaultAvailabilityZone   *string                    `json:"DefaultAvailabilityZone"`
	DefaultInstanceProfileArn *string                    `json:"DefaultInstanceProfileArn"`
	DefaultOs                 *string                    `json:"DefaultOs"`
	DefaultRootDeviceType     *RootDeviceTypeEnum        `json:"DefaultRootDeviceType"`
	DefaultSSHKeyName         *string                    `json:"DefaultSshKeyName"`
	DefaultSubnetID           *string                    `json:"DefaultSubnetId"`
	HostnameTheme             *string                    `json:"HostnameTheme"`
	Name                      *string                    `json:"Name"`
	ServiceRoleArn            *string                    `json:"ServiceRoleArn"`
	StackID                   string                     `json:"StackId"`
	UseCustomCookbooks        *bool                      `json:"UseCustomCookbooks"`
	UseOpsworksSecurityGroups *bool                      `json:"UseOpsworksSecurityGroups"`
}
