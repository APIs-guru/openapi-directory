package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDeploymentJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateDeploymentJobRequestBodyDeploymentConfig
// Information about a deployment configuration.
type CreateDeploymentJobRequestBodyDeploymentConfig struct {
	ConcurrentDeploymentPercentage  *int64           `json:"concurrentDeploymentPercentage,omitempty"`
	DownloadConditionFile           *shared.S3Object `json:"downloadConditionFile,omitempty"`
	FailureThresholdPercentage      *int64           `json:"failureThresholdPercentage,omitempty"`
	RobotDeploymentTimeoutInSeconds *int64           `json:"robotDeploymentTimeoutInSeconds,omitempty"`
}

type CreateDeploymentJobRequestBody struct {
	ClientRequestToken           string                                          `json:"clientRequestToken"`
	DeploymentApplicationConfigs []shared.DeploymentApplicationConfig            `json:"deploymentApplicationConfigs"`
	DeploymentConfig             *CreateDeploymentJobRequestBodyDeploymentConfig `json:"deploymentConfig,omitempty"`
	Fleet                        string                                          `json:"fleet"`
	Tags                         map[string]string                               `json:"tags,omitempty"`
}

type CreateDeploymentJobRequest struct {
	Headers CreateDeploymentJobHeaders
	Request CreateDeploymentJobRequestBody `request:"mediaType=application/json"`
}

type CreateDeploymentJobResponse struct {
	ConcurrentDeploymentException        *interface{}
	ContentType                          string
	CreateDeploymentJobResponse          *shared.CreateDeploymentJobResponse
	IdempotentParameterMismatchException *interface{}
	InternalServerException              *interface{}
	InvalidParameterException            *interface{}
	LimitExceededException               *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
}
