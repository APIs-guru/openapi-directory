package shared

type CloneStackRequest struct {
	AgentVersion              *string                    `json:"AgentVersion"`
	Attributes                map[string]string          `json:"Attributes"`
	ChefConfiguration         *ChefConfiguration         `json:"ChefConfiguration"`
	CloneAppIds               []string                   `json:"CloneAppIds"`
	ClonePermissions          *bool                      `json:"ClonePermissions"`
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
	Region                    *string                    `json:"Region"`
	ServiceRoleArn            string                     `json:"ServiceRoleArn"`
	SourceStackID             string                     `json:"SourceStackId"`
	UseCustomCookbooks        *bool                      `json:"UseCustomCookbooks"`
	UseOpsworksSecurityGroups *bool                      `json:"UseOpsworksSecurityGroups"`
	VpcID                     *string                    `json:"VpcId"`
}
