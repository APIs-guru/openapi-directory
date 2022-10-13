package shared

type Stack struct {
	AgentVersion              *string                    `json:"AgentVersion"`
	Arn                       *string                    `json:"Arn"`
	Attributes                map[string]string          `json:"Attributes"`
	ChefConfiguration         *ChefConfiguration         `json:"ChefConfiguration"`
	ConfigurationManager      *StackConfigurationManager `json:"ConfigurationManager"`
	CreatedAt                 *string                    `json:"CreatedAt"`
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
	Region                    *string                    `json:"Region"`
	ServiceRoleArn            *string                    `json:"ServiceRoleArn"`
	StackID                   *string                    `json:"StackId"`
	UseCustomCookbooks        *bool                      `json:"UseCustomCookbooks"`
	UseOpsworksSecurityGroups *bool                      `json:"UseOpsworksSecurityGroups"`
	VpcID                     *string                    `json:"VpcId"`
}
