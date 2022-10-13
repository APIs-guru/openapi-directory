package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePipelineDefinitionForExecutionXAmzTargetEnum string

const (
	DescribePipelineDefinitionForExecutionXAmzTargetEnumSageMakerDescribePipelineDefinitionForExecution DescribePipelineDefinitionForExecutionXAmzTargetEnum = "SageMaker.DescribePipelineDefinitionForExecution"
)

type DescribePipelineDefinitionForExecutionHeaders struct {
	XAmzAlgorithm     *string                                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePipelineDefinitionForExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribePipelineDefinitionForExecutionRequest struct {
	Headers DescribePipelineDefinitionForExecutionHeaders
	Request shared.DescribePipelineDefinitionForExecutionRequest `request:"mediaType=application/json"`
}

type DescribePipelineDefinitionForExecutionResponse struct {
	ContentType                                    string
	DescribePipelineDefinitionForExecutionResponse *shared.DescribePipelineDefinitionForExecutionResponse
	ResourceNotFound                               *interface{}
	StatusCode                                     int64
}
