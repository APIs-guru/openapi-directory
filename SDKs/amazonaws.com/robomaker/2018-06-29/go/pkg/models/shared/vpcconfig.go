package shared

// VpcConfig
// If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.
type VpcConfig struct {
	AssignPublicIP *bool    `json:"assignPublicIp,omitempty"`
	SecurityGroups []string `json:"securityGroups,omitempty"`
	Subnets        []string `json:"subnets"`
}
