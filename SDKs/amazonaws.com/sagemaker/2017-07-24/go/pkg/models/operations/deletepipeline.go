package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePipelineXAmzTargetEnum string

const (
	DeletePipelineXAmzTargetEnumSageMakerDeletePipeline DeletePipelineXAmzTargetEnum = "SageMaker.DeletePipeline"
)

type DeletePipelineHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePipelineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeletePipelineRequest struct {
	Headers DeletePipelineHeaders
	Request shared.DeletePipelineRequest `request:"mediaType=application/json"`
}

type DeletePipelineResponse struct {
	ContentType            string
	DeletePipelineResponse *shared.DeletePipelineResponse
	ResourceNotFound       *interface{}
	StatusCode             int64
}
