package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFunctionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateFunctionRequestBodyCode struct {
	ImageURI        *string `json:"ImageUri"`
	S3Bucket        *string `json:"S3Bucket"`
	S3Key           *string `json:"S3Key"`
	S3ObjectVersion *string `json:"S3ObjectVersion"`
	ZipFile         *string `json:"ZipFile"`
}

type CreateFunctionRequestBodyDeadLetterConfig struct {
	TargetArn *string `json:"TargetArn"`
}

type CreateFunctionRequestBodyEnvironment struct {
	Variables map[string]string `json:"Variables"`
}

type CreateFunctionRequestBodyImageConfig struct {
	Command          []string `json:"Command"`
	EntryPoint       []string `json:"EntryPoint"`
	WorkingDirectory *string  `json:"WorkingDirectory"`
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
	Mode *shared.TracingModeEnum `json:"Mode"`
}

type CreateFunctionRequestBodyVpcConfig struct {
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	SubnetIds        []string `json:"SubnetIds"`
}

type CreateFunctionRequestBody struct {
	Code                 CreateFunctionRequestBodyCode              `json:"Code"`
	CodeSigningConfigArn *string                                    `json:"CodeSigningConfigArn"`
	DeadLetterConfig     *CreateFunctionRequestBodyDeadLetterConfig `json:"DeadLetterConfig"`
	Description          *string                                    `json:"Description"`
	Environment          *CreateFunctionRequestBodyEnvironment      `json:"Environment"`
	FileSystemConfigs    []shared.FileSystemConfig                  `json:"FileSystemConfigs"`
	FunctionName         string                                     `json:"FunctionName"`
	Handler              *string                                    `json:"Handler"`
	ImageConfig          *CreateFunctionRequestBodyImageConfig      `json:"ImageConfig"`
	KmsKeyArn            *string                                    `json:"KMSKeyArn"`
	Layers               []string                                   `json:"Layers"`
	MemorySize           *int64                                     `json:"MemorySize"`
	PackageType          *CreateFunctionRequestBodyPackageTypeEnum  `json:"PackageType"`
	Publish              *bool                                      `json:"Publish"`
	Role                 string                                     `json:"Role"`
	Runtime              *CreateFunctionRequestBodyRuntimeEnum      `json:"Runtime"`
	Tags                 map[string]string                          `json:"Tags"`
	Timeout              *int64                                     `json:"Timeout"`
	TracingConfig        *CreateFunctionRequestBodyTracingConfig    `json:"TracingConfig"`
	VpcConfig            *CreateFunctionRequestBodyVpcConfig        `json:"VpcConfig"`
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
