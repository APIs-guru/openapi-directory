package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFunctionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateFunctionRequestBodyCode struct {
	ImageURI        *string `json:"ImageUri,omitempty"`
	S3Bucket        *string `json:"S3Bucket,omitempty"`
	S3Key           *string `json:"S3Key,omitempty"`
	S3ObjectVersion *string `json:"S3ObjectVersion,omitempty"`
	ZipFile         *string `json:"ZipFile,omitempty"`
}

type CreateFunctionRequestBodyDeadLetterConfig struct {
	TargetArn *string `json:"TargetArn,omitempty"`
}

type CreateFunctionRequestBodyEnvironment struct {
	Variables map[string]string `json:"Variables,omitempty"`
}

type CreateFunctionRequestBodyImageConfig struct {
	Command          []string `json:"Command,omitempty"`
	EntryPoint       []string `json:"EntryPoint,omitempty"`
	WorkingDirectory *string  `json:"WorkingDirectory,omitempty"`
}

type CreateFunctionRequestBodyPackageTypeEnum string

const (
	CreateFunctionRequestBodyPackageTypeEnumZip   CreateFunctionRequestBodyPackageTypeEnum = "Zip"
	CreateFunctionRequestBodyPackageTypeEnumImage CreateFunctionRequestBodyPackageTypeEnum = "Image"
)

type CreateFunctionRequestBodyRuntimeEnum string

const (
	CreateFunctionRequestBodyRuntimeEnumNodejs       CreateFunctionRequestBodyRuntimeEnum = "nodejs"
	CreateFunctionRequestBodyRuntimeEnumNodejs43     CreateFunctionRequestBodyRuntimeEnum = "nodejs4.3"
	CreateFunctionRequestBodyRuntimeEnumNodejs610    CreateFunctionRequestBodyRuntimeEnum = "nodejs6.10"
	CreateFunctionRequestBodyRuntimeEnumNodejs810    CreateFunctionRequestBodyRuntimeEnum = "nodejs8.10"
	CreateFunctionRequestBodyRuntimeEnumNodejs10X    CreateFunctionRequestBodyRuntimeEnum = "nodejs10.x"
	CreateFunctionRequestBodyRuntimeEnumNodejs12X    CreateFunctionRequestBodyRuntimeEnum = "nodejs12.x"
	CreateFunctionRequestBodyRuntimeEnumNodejs14X    CreateFunctionRequestBodyRuntimeEnum = "nodejs14.x"
	CreateFunctionRequestBodyRuntimeEnumJava8        CreateFunctionRequestBodyRuntimeEnum = "java8"
	CreateFunctionRequestBodyRuntimeEnumJava8Al2     CreateFunctionRequestBodyRuntimeEnum = "java8.al2"
	CreateFunctionRequestBodyRuntimeEnumJava11       CreateFunctionRequestBodyRuntimeEnum = "java11"
	CreateFunctionRequestBodyRuntimeEnumPython27     CreateFunctionRequestBodyRuntimeEnum = "python2.7"
	CreateFunctionRequestBodyRuntimeEnumPython36     CreateFunctionRequestBodyRuntimeEnum = "python3.6"
	CreateFunctionRequestBodyRuntimeEnumPython37     CreateFunctionRequestBodyRuntimeEnum = "python3.7"
	CreateFunctionRequestBodyRuntimeEnumPython38     CreateFunctionRequestBodyRuntimeEnum = "python3.8"
	CreateFunctionRequestBodyRuntimeEnumPython39     CreateFunctionRequestBodyRuntimeEnum = "python3.9"
	CreateFunctionRequestBodyRuntimeEnumDotnetcore10 CreateFunctionRequestBodyRuntimeEnum = "dotnetcore1.0"
	CreateFunctionRequestBodyRuntimeEnumDotnetcore20 CreateFunctionRequestBodyRuntimeEnum = "dotnetcore2.0"
	CreateFunctionRequestBodyRuntimeEnumDotnetcore21 CreateFunctionRequestBodyRuntimeEnum = "dotnetcore2.1"
	CreateFunctionRequestBodyRuntimeEnumDotnetcore31 CreateFunctionRequestBodyRuntimeEnum = "dotnetcore3.1"
	CreateFunctionRequestBodyRuntimeEnumNodejs43Edge CreateFunctionRequestBodyRuntimeEnum = "nodejs4.3-edge"
	CreateFunctionRequestBodyRuntimeEnumGo1X         CreateFunctionRequestBodyRuntimeEnum = "go1.x"
	CreateFunctionRequestBodyRuntimeEnumRuby25       CreateFunctionRequestBodyRuntimeEnum = "ruby2.5"
	CreateFunctionRequestBodyRuntimeEnumRuby27       CreateFunctionRequestBodyRuntimeEnum = "ruby2.7"
	CreateFunctionRequestBodyRuntimeEnumProvided     CreateFunctionRequestBodyRuntimeEnum = "provided"
	CreateFunctionRequestBodyRuntimeEnumProvidedAl2  CreateFunctionRequestBodyRuntimeEnum = "provided.al2"
)

type CreateFunctionRequestBodyTracingConfig struct {
	Mode *shared.TracingModeEnum `json:"Mode,omitempty"`
}

type CreateFunctionRequestBodyVpcConfig struct {
	SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
	SubnetIds        []string `json:"SubnetIds,omitempty"`
}

type CreateFunctionRequestBody struct {
	Code                 CreateFunctionRequestBodyCode              `json:"Code"`
	CodeSigningConfigArn *string                                    `json:"CodeSigningConfigArn,omitempty"`
	DeadLetterConfig     *CreateFunctionRequestBodyDeadLetterConfig `json:"DeadLetterConfig,omitempty"`
	Description          *string                                    `json:"Description,omitempty"`
	Environment          *CreateFunctionRequestBodyEnvironment      `json:"Environment,omitempty"`
	FileSystemConfigs    []shared.FileSystemConfig                  `json:"FileSystemConfigs,omitempty"`
	FunctionName         string                                     `json:"FunctionName"`
	Handler              *string                                    `json:"Handler,omitempty"`
	ImageConfig          *CreateFunctionRequestBodyImageConfig      `json:"ImageConfig,omitempty"`
	KmsKeyArn            *string                                    `json:"KMSKeyArn,omitempty"`
	Layers               []string                                   `json:"Layers,omitempty"`
	MemorySize           *int64                                     `json:"MemorySize,omitempty"`
	PackageType          *CreateFunctionRequestBodyPackageTypeEnum  `json:"PackageType,omitempty"`
	Publish              *bool                                      `json:"Publish,omitempty"`
	Role                 string                                     `json:"Role"`
	Runtime              *CreateFunctionRequestBodyRuntimeEnum      `json:"Runtime,omitempty"`
	Tags                 map[string]string                          `json:"Tags,omitempty"`
	Timeout              *int64                                     `json:"Timeout,omitempty"`
	TracingConfig        *CreateFunctionRequestBodyTracingConfig    `json:"TracingConfig,omitempty"`
	VpcConfig            *CreateFunctionRequestBodyVpcConfig        `json:"VpcConfig,omitempty"`
}

type CreateFunctionRequest struct {
	Headers CreateFunctionHeaders
	Request CreateFunctionRequestBody `request:"mediaType=application/json"`
}

type CreateFunctionResponse struct {
	CodeSigningConfigNotFoundException *interface{}
	CodeStorageExceededException       *interface{}
	CodeVerificationFailedException    *interface{}
	ContentType                        string
	FunctionConfiguration              *shared.FunctionConfiguration
	InvalidCodeSignatureException      *interface{}
	InvalidParameterValueException     *interface{}
	ResourceConflictException          *interface{}
	ResourceNotFoundException          *interface{}
	ServiceException                   *interface{}
	StatusCode                         int64
	TooManyRequestsException           *interface{}
}
