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
	Handler   *string `json:"Handler"`
	S3Bucket  *string `json:"S3Bucket"`
	S3Key     *string `json:"S3Key"`
	S3Version *string `json:"S3Version"`
	ZipFile   *string `json:"ZipFile"`
}

type CreateCanaryRequestBodyRunConfig struct {
	ActiveTracing        *bool             `json:"ActiveTracing"`
	EnvironmentVariables map[string]string `json:"EnvironmentVariables"`
	MemoryInMb           *int64            `json:"MemoryInMB"`
	TimeoutInSeconds     *int64            `json:"TimeoutInSeconds"`
}

type CreateCanaryRequestBodySchedule struct {
	DurationInSeconds *int64  `json:"DurationInSeconds"`
	Expression        *string `json:"Expression"`
}

type CreateCanaryRequestBodyVpcConfig struct {
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	SubnetIds        []string `json:"SubnetIds"`
}

type CreateCanaryRequestBody struct {
	ArtifactS3Location           string                            `json:"ArtifactS3Location"`
	Code                         CreateCanaryRequestBodyCode       `json:"Code"`
	ExecutionRoleArn             string                            `json:"ExecutionRoleArn"`
	FailureRetentionPeriodInDays *int64                            `json:"FailureRetentionPeriodInDays"`
	Name                         string                            `json:"Name"`
	RunConfig                    *CreateCanaryRequestBodyRunConfig `json:"RunConfig"`
	RuntimeVersion               string                            `json:"RuntimeVersion"`
	Schedule                     CreateCanaryRequestBodySchedule   `json:"Schedule"`
	SuccessRetentionPeriodInDays *int64                            `json:"SuccessRetentionPeriodInDays"`
	Tags                         map[string]string                 `json:"Tags"`
	VpcConfig                    *CreateCanaryRequestBodyVpcConfig `json:"VpcConfig"`
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
