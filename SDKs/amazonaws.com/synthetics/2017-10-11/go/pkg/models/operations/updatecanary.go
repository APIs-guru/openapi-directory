package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCanaryPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type UpdateCanaryHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateCanaryRequestBodyCode struct {
	Handler   *string `json:"Handler"`
	S3Bucket  *string `json:"S3Bucket"`
	S3Key     *string `json:"S3Key"`
	S3Version *string `json:"S3Version"`
	ZipFile   *string `json:"ZipFile"`
}

type UpdateCanaryRequestBodyRunConfig struct {
	ActiveTracing        *bool             `json:"ActiveTracing"`
	EnvironmentVariables map[string]string `json:"EnvironmentVariables"`
	MemoryInMb           *int64            `json:"MemoryInMB"`
	TimeoutInSeconds     *int64            `json:"TimeoutInSeconds"`
}

type UpdateCanaryRequestBodySchedule struct {
	DurationInSeconds *int64  `json:"DurationInSeconds"`
	Expression        *string `json:"Expression"`
}

type UpdateCanaryRequestBodyVisualReference struct {
	BaseCanaryRunID *string                 `json:"BaseCanaryRunId"`
	BaseScreenshots []shared.BaseScreenshot `json:"BaseScreenshots"`
}

type UpdateCanaryRequestBodyVpcConfig struct {
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	SubnetIds        []string `json:"SubnetIds"`
}

type UpdateCanaryRequestBody struct {
	Code                         *UpdateCanaryRequestBodyCode            `json:"Code"`
	ExecutionRoleArn             *string                                 `json:"ExecutionRoleArn"`
	FailureRetentionPeriodInDays *int64                                  `json:"FailureRetentionPeriodInDays"`
	RunConfig                    *UpdateCanaryRequestBodyRunConfig       `json:"RunConfig"`
	RuntimeVersion               *string                                 `json:"RuntimeVersion"`
	Schedule                     *UpdateCanaryRequestBodySchedule        `json:"Schedule"`
	SuccessRetentionPeriodInDays *int64                                  `json:"SuccessRetentionPeriodInDays"`
	VisualReference              *UpdateCanaryRequestBodyVisualReference `json:"VisualReference"`
	VpcConfig                    *UpdateCanaryRequestBodyVpcConfig       `json:"VpcConfig"`
}

type UpdateCanaryRequest struct {
	PathParams UpdateCanaryPathParams
	Headers    UpdateCanaryHeaders
	Request    UpdateCanaryRequestBody `request:"mediaType=application/json"`
}

type UpdateCanaryResponse struct {
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateCanaryResponse      map[string]interface{}
	ValidationException       *interface{}
}
