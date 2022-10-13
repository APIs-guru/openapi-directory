package operations

import (
	"openapi/pkg/models/shared"
)

type StopPipelineExecutionXAmzTargetEnum string

const (
	StopPipelineExecutionXAmzTargetEnumSageMakerStopPipelineExecution StopPipelineExecutionXAmzTargetEnum = "SageMaker.StopPipelineExecution"
)

type StopPipelineExecutionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopPipelineExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopPipelineExecutionRequest struct {
	Headers StopPipelineExecutionHeaders
	Request shared.StopPipelineExecutionRequest `request:"mediaType=application/json"`
}

type StopPipelineExecutionResponse struct {
	ContentType                   string
	ResourceNotFound              *interface{}
	StatusCode                    int64
	StopPipelineExecutionResponse *shared.StopPipelineExecutionResponse
}
