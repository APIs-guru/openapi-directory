package operations

import (
	"openapi/pkg/models/shared"
)

type ListCompilationJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListCompilationJobsXAmzTargetEnum string

const (
	ListCompilationJobsXAmzTargetEnumSageMakerListCompilationJobs ListCompilationJobsXAmzTargetEnum = "SageMaker.ListCompilationJobs"
)

type ListCompilationJobsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCompilationJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListCompilationJobsRequest struct {
	QueryParams ListCompilationJobsQueryParams
	Headers     ListCompilationJobsHeaders
	Request     shared.ListCompilationJobsRequest `request:"mediaType=application/json"`
}

type ListCompilationJobsResponse struct {
	ContentType                 string
	ListCompilationJobsResponse *shared.ListCompilationJobsResponse
	StatusCode                  int64
}
