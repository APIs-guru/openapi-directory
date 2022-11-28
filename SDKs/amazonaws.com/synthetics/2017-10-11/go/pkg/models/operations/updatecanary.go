package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCanaryPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type UpdateCanaryHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateCanaryRequestBodyCode
// Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>.
type UpdateCanaryRequestBodyCode struct {
	Handler   *string `json:"Handler,omitempty"`
	S3Bucket  *string `json:"S3Bucket,omitempty"`
	S3Key     *string `json:"S3Key,omitempty"`
	S3Version *string `json:"S3Version,omitempty"`
	ZipFile   *string `json:"ZipFile,omitempty"`
}

// UpdateCanaryRequestBodyRunConfig
// A structure that contains input information for a canary run.
type UpdateCanaryRequestBodyRunConfig struct {
	ActiveTracing        *bool             `json:"ActiveTracing,omitempty"`
	EnvironmentVariables map[string]string `json:"EnvironmentVariables,omitempty"`
	MemoryInMb           *int64            `json:"MemoryInMB,omitempty"`
	TimeoutInSeconds     *int64            `json:"TimeoutInSeconds,omitempty"`
}

// UpdateCanaryRequestBodySchedule
// This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
type UpdateCanaryRequestBodySchedule struct {
	DurationInSeconds *int64  `json:"DurationInSeconds,omitempty"`
	Expression        *string `json:"Expression,omitempty"`
}

// UpdateCanaryRequestBodyVisualReference
// <p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary, and optionally the parts of the screenshots to ignore during the visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html"> Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html"> Visual monitoring blueprint</a> </p>
type UpdateCanaryRequestBodyVisualReference struct {
	BaseCanaryRunID *string                 `json:"BaseCanaryRunId,omitempty"`
	BaseScreenshots []shared.BaseScreenshot `json:"BaseScreenshots,omitempty"`
}

// UpdateCanaryRequestBodyVpcConfig
// If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
type UpdateCanaryRequestBodyVpcConfig struct {
	SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
	SubnetIds        []string `json:"SubnetIds,omitempty"`
}

type UpdateCanaryRequestBody struct {
	Code                         *UpdateCanaryRequestBodyCode            `json:"Code,omitempty"`
	ExecutionRoleArn             *string                                 `json:"ExecutionRoleArn,omitempty"`
	FailureRetentionPeriodInDays *int64                                  `json:"FailureRetentionPeriodInDays,omitempty"`
	RunConfig                    *UpdateCanaryRequestBodyRunConfig       `json:"RunConfig,omitempty"`
	RuntimeVersion               *string                                 `json:"RuntimeVersion,omitempty"`
	Schedule                     *UpdateCanaryRequestBodySchedule        `json:"Schedule,omitempty"`
	SuccessRetentionPeriodInDays *int64                                  `json:"SuccessRetentionPeriodInDays,omitempty"`
	VisualReference              *UpdateCanaryRequestBodyVisualReference `json:"VisualReference,omitempty"`
	VpcConfig                    *UpdateCanaryRequestBodyVpcConfig       `json:"VpcConfig,omitempty"`
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
