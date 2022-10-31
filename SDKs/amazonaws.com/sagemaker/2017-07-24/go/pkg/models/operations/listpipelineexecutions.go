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
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPipelineExecutionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
