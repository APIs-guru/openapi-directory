package shared

type AwsLambdaFunctionVpcConfig struct {
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	SubnetIds        []string `json:"SubnetIds"`
	VpcID            *string  `json:"VpcId"`
}
