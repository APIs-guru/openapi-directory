package shared

type AwsCodeBuildProjectVpcConfig struct {
	SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
	Subnets          []string `json:"Subnets,omitempty"`
	VpcID            *string  `json:"VpcId,omitempty"`
}
