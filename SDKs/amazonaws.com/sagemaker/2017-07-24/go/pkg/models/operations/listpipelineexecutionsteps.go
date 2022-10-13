package operations

import (
	"openapi/pkg/models/shared"
)

type ListPipelineExecutionStepsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPipelineExecutionStepsXAmzTargetEnum string

const (
	ListPipelineExecutionStepsXAmzTargetEnumSageMakerListPipelineExecutionSteps ListPipelineExecutionStepsXAmzTargetEnum = "SageMaker.ListPipelineExecutionSteps"
)

type ListPipelineExecutionStepsHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPipelineExecutionStepsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPipelineExecutionStepsRequest struct {
	QueryParams ListPipelineExecutionStepsQueryParams
	Headers     ListPipelineExecutionStepsHeaders
	Request     shared.ListPipelineExecutionStepsRequest `request:"mediaType=application/json"`
}

type ListPipelineExecutionStepsResponse struct {
	ContentType                        string
	ListPipelineExecutionStepsResponse *shared.ListPipelineExecutionStepsResponse
	ResourceNotFound                   *interface{}
	StatusCode                         int64
}
