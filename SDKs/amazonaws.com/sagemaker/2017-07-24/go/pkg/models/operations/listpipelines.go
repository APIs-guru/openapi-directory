package operations

import (
	"openapi/pkg/models/shared"
)

type ListPipelinesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPipelinesXAmzTargetEnum string

const (
	ListPipelinesXAmzTargetEnumSageMakerListPipelines ListPipelinesXAmzTargetEnum = "SageMaker.ListPipelines"
)

type ListPipelinesHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPipelinesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListPipelinesRequest struct {
	QueryParams ListPipelinesQueryParams
	Headers     ListPipelinesHeaders
	Request     shared.ListPipelinesRequest `request:"mediaType=application/json"`
}

type ListPipelinesResponse struct {
	ContentType           string
	ListPipelinesResponse *shared.ListPipelinesResponse
	StatusCode            int64
}
