package shared

type AwsCodeBuildProjectVpcConfig struct {
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	Subnets          []string `json:"Subnets"`
	VpcID            *string  `json:"VpcId"`
}
