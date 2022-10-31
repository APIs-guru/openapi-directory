package operations

import (
	"openapi/pkg/models/shared"
)

type ListAutoMlJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAutoMlJobsXAmzTargetEnum string

const (
	ListAutoMlJobsXAmzTargetEnumSageMakerListAutoMlJobs ListAutoMlJobsXAmzTargetEnum = "SageMaker.ListAutoMLJobs"
)

type ListAutoMlJobsHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAutoMlJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListAutoMlJobsRequest struct {
	QueryParams ListAutoMlJobsQueryParams
	Headers     ListAutoMlJobsHeaders
	Request     shared.ListAutoMlJobsRequest `request:"mediaType=application/json"`
}

type ListAutoMlJobsResponse struct {
	ContentType            string
	ListAutoMlJobsResponse *shared.ListAutoMlJobsResponse
	StatusCode             int64
}
