package shared

type AwsLambdaFunctionDetails struct {
	Code             *AwsLambdaFunctionCode             `json:"Code"`
	CodeSha256       *string                            `json:"CodeSha256"`
	DeadLetterConfig *AwsLambdaFunctionDeadLetterConfig `json:"DeadLetterConfig"`
	Environment      *AwsLambdaFunctionEnvironment      `json:"Environment"`
	FunctionName     *string                            `json:"FunctionName"`
	Handler          *string                            `json:"Handler"`
	KmsKeyArn        *string                            `json:"KmsKeyArn"`
	LastModified     *string                            `json:"LastModified"`
	Layers           []AwsLambdaFunctionLayer           `json:"Layers"`
	MasterArn        *string                            `json:"MasterArn"`
	MemorySize       *int64                             `json:"MemorySize"`
	RevisionID       *string                            `json:"RevisionId"`
	Role             *string                            `json:"Role"`
	Runtime          *string                            `json:"Runtime"`
	Timeout          *int64                             `json:"Timeout"`
	TracingConfig    *AwsLambdaFunctionTracingConfig    `json:"TracingConfig"`
	Version          *string                            `json:"Version"`
	VpcConfig        *AwsLambdaFunctionVpcConfig        `json:"VpcConfig"`
}
