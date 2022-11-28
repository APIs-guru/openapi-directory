package shared

// AwsLambdaFunctionVpcConfig
// The VPC security groups and subnets that are attached to a Lambda function.
type AwsLambdaFunctionVpcConfig struct {
	SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
	SubnetIds        []string `json:"SubnetIds,omitempty"`
	VpcID            *string  `json:"VpcId,omitempty"`
}
