package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCanaryHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateCanaryRequestBodyCode
// Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>.
type CreateCanaryRequestBodyCode struct {
	Handler   *string `json:"Handler,omitempty"`
	S3Bucket  *string `json:"S3Bucket,omitempty"`
	S3Key     *string `json:"S3Key,omitempty"`
	S3Version *string `json:"S3Version,omitempty"`
	ZipFile   *string `json:"ZipFile,omitempty"`
}

// CreateCanaryRequestBodyRunConfig
// A structure that contains input information for a canary run.
type CreateCanaryRequestBodyRunConfig struct {
	ActiveTracing        *bool             `json:"ActiveTracing,omitempty"`
	EnvironmentVariables map[string]string `json:"EnvironmentVariables,omitempty"`
	MemoryInMb           *int64            `json:"MemoryInMB,omitempty"`
	TimeoutInSeconds     *int64            `json:"TimeoutInSeconds,omitempty"`
}

// CreateCanaryRequestBodySchedule
// This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
type CreateCanaryRequestBodySchedule struct {
	DurationInSeconds *int64  `json:"DurationInSeconds,omitempty"`
	Expression        *string `json:"Expression,omitempty"`
}

// CreateCanaryRequestBodyVpcConfig
// If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
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
