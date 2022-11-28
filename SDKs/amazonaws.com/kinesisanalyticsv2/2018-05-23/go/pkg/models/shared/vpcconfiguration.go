package shared

// VpcConfiguration
// Describes the parameters of a VPC used by the application.
type VpcConfiguration struct {
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	SubnetIds        []string `json:"SubnetIds"`
}
