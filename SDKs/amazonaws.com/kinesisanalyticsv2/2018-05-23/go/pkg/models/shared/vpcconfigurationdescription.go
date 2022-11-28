package shared

// VpcConfigurationDescription
// Describes the parameters of a VPC used by the application.
type VpcConfigurationDescription struct {
	SecurityGroupIds   []string `json:"SecurityGroupIds"`
	SubnetIds          []string `json:"SubnetIds"`
	VpcConfigurationID string   `json:"VpcConfigurationId"`
	VpcID              string   `json:"VpcId"`
}
