package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFunctionConfigurationPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type UpdateFunctionConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateFunctionConfigurationRequestBodyDeadLetterConfig
// The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
type UpdateFunctionConfigurationRequestBodyDeadLetterConfig struct {
	TargetArn *string `json:"TargetArn,omitempty"`
}

// UpdateFunctionConfigurationRequestBodyEnvironment
// A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.
type UpdateFunctionConfigurationRequestBodyEnvironment struct {
	Variables map[string]string `json:"Variables,omitempty"`
}

// UpdateFunctionConfigurationRequestBodyImageConfig
// Configuration values that override the container image Dockerfile settings. See <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container settings</a>.
type UpdateFunctionConfigurationRequestBodyImageConfig struct {
	Command          []string `json:"Command,omitempty"`
	EntryPoint       []string `json:"EntryPoint,omitempty"`
	WorkingDirectory *string  `json:"WorkingDirectory,omitempty"`
}

type UpdateFunctionConfigurationRequestBodyRuntimeEnum string

const (
	UpdateFunctionConfigurationRequestBodyRuntimeEnumNodejs       UpdateFunctionConfigurationRequestBodyRuntimeEnum = "nodejs"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumNodejs43     UpdateFunctionConfigurationRequestBodyRuntimeEnum = "nodejs4.3"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumNodejs610    UpdateFunctionConfigurationRequestBodyRuntimeEnum = "nodejs6.10"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumNodejs810    UpdateFunctionConfigurationRequestBodyRuntimeEnum = "nodejs8.10"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumNodejs10X    UpdateFunctionConfigurationRequestBodyRuntimeEnum = "nodejs10.x"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumNodejs12X    UpdateFunctionConfigurationRequestBodyRuntimeEnum = "nodejs12.x"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumNodejs14X    UpdateFunctionConfigurationRequestBodyRuntimeEnum = "nodejs14.x"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumJava8        UpdateFunctionConfigurationRequestBodyRuntimeEnum = "java8"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumJava8Al2     UpdateFunctionConfigurationRequestBodyRuntimeEnum = "java8.al2"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumJava11       UpdateFunctionConfigurationRequestBodyRuntimeEnum = "java11"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumPython27     UpdateFunctionConfigurationRequestBodyRuntimeEnum = "python2.7"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumPython36     UpdateFunctionConfigurationRequestBodyRuntimeEnum = "python3.6"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumPython37     UpdateFunctionConfigurationRequestBodyRuntimeEnum = "python3.7"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumPython38     UpdateFunctionConfigurationRequestBodyRuntimeEnum = "python3.8"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumPython39     UpdateFunctionConfigurationRequestBodyRuntimeEnum = "python3.9"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumDotnetcore10 UpdateFunctionConfigurationRequestBodyRuntimeEnum = "dotnetcore1.0"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumDotnetcore20 UpdateFunctionConfigurationRequestBodyRuntimeEnum = "dotnetcore2.0"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumDotnetcore21 UpdateFunctionConfigurationRequestBodyRuntimeEnum = "dotnetcore2.1"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumDotnetcore31 UpdateFunctionConfigurationRequestBodyRuntimeEnum = "dotnetcore3.1"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumNodejs43Edge UpdateFunctionConfigurationRequestBodyRuntimeEnum = "nodejs4.3-edge"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumGo1X         UpdateFunctionConfigurationRequestBodyRuntimeEnum = "go1.x"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumRuby25       UpdateFunctionConfigurationRequestBodyRuntimeEnum = "ruby2.5"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumRuby27       UpdateFunctionConfigurationRequestBodyRuntimeEnum = "ruby2.7"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumProvided     UpdateFunctionConfigurationRequestBodyRuntimeEnum = "provided"
	UpdateFunctionConfigurationRequestBodyRuntimeEnumProvidedAl2  UpdateFunctionConfigurationRequestBodyRuntimeEnum = "provided.al2"
)

// UpdateFunctionConfigurationRequestBodyTracingConfig
// The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.
type UpdateFunctionConfigurationRequestBodyTracingConfig struct {
	Mode *shared.TracingModeEnum `json:"Mode,omitempty"`
}

// UpdateFunctionConfigurationRequestBodyVpcConfig
// The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.
type UpdateFunctionConfigurationRequestBodyVpcConfig struct {
	SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
	SubnetIds        []string `json:"SubnetIds,omitempty"`
}

type UpdateFunctionConfigurationRequestBody struct {
	DeadLetterConfig  *UpdateFunctionConfigurationRequestBodyDeadLetterConfig `json:"DeadLetterConfig,omitempty"`
	Description       *string                                                 `json:"Description,omitempty"`
	Environment       *UpdateFunctionConfigurationRequestBodyEnvironment      `json:"Environment,omitempty"`
	FileSystemConfigs []shared.FileSystemConfig                               `json:"FileSystemConfigs,omitempty"`
	Handler           *string                                                 `json:"Handler,omitempty"`
	ImageConfig       *UpdateFunctionConfigurationRequestBodyImageConfig      `json:"ImageConfig,omitempty"`
	KmsKeyArn         *string                                                 `json:"KMSKeyArn,omitempty"`
	Layers            []string                                                `json:"Layers,omitempty"`
	MemorySize        *int64                                                  `json:"MemorySize,omitempty"`
	RevisionID        *string                                                 `json:"RevisionId,omitempty"`
	Role              *string                                                 `json:"Role,omitempty"`
	Runtime           *UpdateFunctionConfigurationRequestBodyRuntimeEnum      `json:"Runtime,omitempty"`
	Timeout           *int64                                                  `json:"Timeout,omitempty"`
	TracingConfig     *UpdateFunctionConfigurationRequestBodyTracingConfig    `json:"TracingConfig,omitempty"`
	VpcConfig         *UpdateFunctionConfigurationRequestBodyVpcConfig        `json:"VpcConfig,omitempty"`
}

type UpdateFunctionConfigurationRequest struct {
	PathParams UpdateFunctionConfigurationPathParams
	Headers    UpdateFunctionConfigurationHeaders
	Request    UpdateFunctionConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateFunctionConfigurationResponse struct {
	CodeSigningConfigNotFoundException *interface{}
	CodeVerificationFailedException    *interface{}
	ContentType                        string
	FunctionConfiguration              *shared.FunctionConfiguration
	InvalidCodeSignatureException      *interface{}
	InvalidParameterValueException     *interface{}
	PreconditionFailedException        *interface{}
	ResourceConflictException          *interface{}
	ResourceNotFoundException          *interface{}
	ServiceException                   *interface{}
	StatusCode                         int64
	TooManyRequestsException           *interface{}
}
