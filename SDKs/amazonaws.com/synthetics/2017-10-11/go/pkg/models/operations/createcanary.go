package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCanaryHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateCanaryRequestBodyCode struct {
	Handler   *string `json:"Handler,omitempty"`
	S3Bucket  *string `json:"S3Bucket,omitempty"`
	S3Key     *string `json:"S3Key,omitempty"`
	S3Version *string `json:"S3Version,omitempty"`
	ZipFile   *string `json:"ZipFile,omitempty"`
}

type CreateCanaryRequestBodyRunConfig struct {
	ActiveTracing        *bool             `json:"ActiveTracing,omitempty"`
	EnvironmentVariables map[string]string `json:"EnvironmentVariables,omitempty"`
	MemoryInMb           *int64            `json:"MemoryInMB,omitempty"`
	TimeoutInSeconds     *int64            `json:"TimeoutInSeconds,omitempty"`
}

type CreateCanaryRequestBodySchedule struct {
	DurationInSeconds *int64  `json:"DurationInSeconds,omitempty"`
	Expression        *string `json:"Expression,omitempty"`
}

type CreateCanaryRequestBodyVpcConfig struct {
	SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
	SubnetIds        []string `json:"SubnetIds,omitempty"`
}

type CreateCanaryRequestBody struct {
	ArtifactS3Location           string                            `json:"ArtifactS3Location"`
	Code                         CreateCanaryRequestBodyCode       `json:"Code"`
	ExecutionRoleArn             string                            `json:"ExecutionRoleArn"`
	FailureRetentionPeriodInDays *int64                            `json:"FailureRetentionPeriodInDays,omitempty"`
	Name                         string                            `json:"Name"`
	RunConfig                    *CreateCanaryRequestBodyRunConfig `json:"RunConfig,omitempty"`
	RuntimeVersion               string                            `json:"RuntimeVersion"`
	Schedule                     CreateCanaryRequestBodySchedule   `json:"Schedule"`
	SuccessRetentionPeriodInDays *int64                            `json:"SuccessRetentionPeriodInDays,omitempty"`
	Tags                         map[string]string                 `json:"Tags,omitempty"`
	VpcConfig                    *CreateCanaryRequestBodyVpcConfig `json:"VpcConfig,omitempty"`
}

type CreateCanaryRequest struct {
	Headers CreateCanaryHeaders
	Request CreateCanaryRequestBody `request:"mediaType=application/json"`
}

type CreateCanaryResponse struct {
	ContentType             string
	CreateCanaryResponse    *shared.CreateCanaryResponse
	InternalServerException *interface{}
	StatusCode              int64
	ValidationException     *interface{}
}
