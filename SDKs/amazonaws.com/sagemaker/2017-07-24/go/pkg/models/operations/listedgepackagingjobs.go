package operations

import (
	"openapi/pkg/models/shared"
)

type ListEdgePackagingJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListEdgePackagingJobsXAmzTargetEnum string

const (
	ListEdgePackagingJobsXAmzTargetEnumSageMakerListEdgePackagingJobs ListEdgePackagingJobsXAmzTargetEnum = "SageMaker.ListEdgePackagingJobs"
)

type ListEdgePackagingJobsHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEdgePackagingJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListEdgePackagingJobsRequest struct {
	QueryParams ListEdgePackagingJobsQueryParams
	Headers     ListEdgePackagingJobsHeaders
	Request     shared.ListEdgePackagingJobsRequest `request:"mediaType=application/json"`
}

type ListEdgePackagingJobsResponse struct {
	ContentType                   string
	ListEdgePackagingJobsResponse *shared.ListEdgePackagingJobsResponse
	StatusCode                    int64
}
