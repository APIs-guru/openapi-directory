package shared

// VpcConfigResponse
// The VPC security groups and subnets that are attached to a Lambda function.
type VpcConfigResponse struct {
	SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
	SubnetIds        []string `json:"SubnetIds,omitempty"`
	VpcID            *string  `json:"VpcId,omitempty"`
}
