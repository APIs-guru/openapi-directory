package shared

// AwsCodeBuildProjectVpcConfig
// Information about the VPC configuration that CodeBuild accesses.
type AwsCodeBuildProjectVpcConfig struct {
	SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
	Subnets          []string `json:"Subnets,omitempty"`
	VpcID            *string  `json:"VpcId,omitempty"`
}
