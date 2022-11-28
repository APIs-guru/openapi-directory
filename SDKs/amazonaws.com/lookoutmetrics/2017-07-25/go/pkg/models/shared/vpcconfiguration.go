package shared

// VpcConfiguration
// Contains configuration information about the Amazon Virtual Private Cloud (VPC).
type VpcConfiguration struct {
	SecurityGroupIDList []string `json:"SecurityGroupIdList"`
	SubnetIDList        []string `json:"SubnetIdList"`
}
