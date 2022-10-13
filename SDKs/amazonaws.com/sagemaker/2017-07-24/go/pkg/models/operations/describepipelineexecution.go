package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePipelineExecutionXAmzTargetEnum string

const (
	DescribePipelineExecutionXAmzTargetEnumSageMakerDescribePipelineExecution DescribePipelineExecutionXAmzTargetEnum = "SageMaker.DescribePipelineExecution"
)

type DescribePipelineExecutionHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePipelineExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribePipelineExecutionRequest struct {
	Headers DescribePipelineExecutionHeaders
	Request shared.DescribePipelineExecutionRequest `request:"mediaType=application/json"`
}

type DescribePipelineExecutionResponse struct {
	ContentType                       string
	DescribePipelineExecutionResponse *shared.DescribePipelineExecutionResponse
	ResourceNotFound                  *interface{}
	StatusCode                        int64
}
