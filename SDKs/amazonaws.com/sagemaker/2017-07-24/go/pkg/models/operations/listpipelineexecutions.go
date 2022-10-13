package operations

import (
	"openapi/pkg/models/shared"
)

type ListPipelineExecutionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPipelineExecutionsXAmzTargetEnum string

const (
	ListPipelineExecutionsXAmzTargetEnumSageMakerListPipelineExecutions ListPipelineExecutionsXAmzTargetEnum = "SageMaker.ListPipelineExecutions"
)

type ListPipelineExecutionsHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPipelineExecutionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPipelineExecutionsRequest struct {
	QueryParams ListPipelineExecutionsQueryParams
	Headers     ListPipelineExecutionsHeaders
	Request     shared.ListPipelineExecutionsRequest `request:"mediaType=application/json"`
}

type ListPipelineExecutionsResponse struct {
	ContentType                    string
	ListPipelineExecutionsResponse *shared.ListPipelineExecutionsResponse
	ResourceNotFound               *interface{}
	StatusCode                     int64
}
