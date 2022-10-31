package shared



type AwsLambdaFunctionDetails struct {
    Code *AwsLambdaFunctionCode `json:"Code,omitempty"`
    CodeSha256 *string `json:"CodeSha256,omitempty"`
    DeadLetterConfig *AwsLambdaFunctionDeadLetterConfig `json:"DeadLetterConfig,omitempty"`
    Environment *AwsLambdaFunctionEnvironment `json:"Environment,omitempty"`
    FunctionName *string `json:"FunctionName,omitempty"`
    Handler *string `json:"Handler,omitempty"`
    KmsKeyArn *string `json:"KmsKeyArn,omitempty"`
    LastModified *string `json:"LastModified,omitempty"`
    Layers []AwsLambdaFunctionLayer `json:"Layers,omitempty"`
    MasterArn *string `json:"MasterArn,omitempty"`
    MemorySize *int64 `json:"MemorySize,omitempty"`
    RevisionID *string `json:"RevisionId,omitempty"`
    Role *string `json:"Role,omitempty"`
    Runtime *string `json:"Runtime,omitempty"`
    Timeout *int64 `json:"Timeout,omitempty"`
    TracingConfig *AwsLambdaFunctionTracingConfig `json:"TracingConfig,omitempty"`
    Version *string `json:"Version,omitempty"`
    VpcConfig *AwsLambdaFunctionVpcConfig `json:"VpcConfig,omitempty"`
    
}

