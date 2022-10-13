package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePipelineXAmzTargetEnum string

const (
	DescribePipelineXAmzTargetEnumSageMakerDescribePipeline DescribePipelineXAmzTargetEnum = "SageMaker.DescribePipeline"
)

type DescribePipelineHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePipelineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribePipelineRequest struct {
	Headers DescribePipelineHeaders
	Request shared.DescribePipelineRequest `request:"mediaType=application/json"`
}

type DescribePipelineResponse struct {
	ContentType              string
	DescribePipelineResponse *shared.DescribePipelineResponse
	ResourceNotFound         *interface{}
	StatusCode               int64
}
