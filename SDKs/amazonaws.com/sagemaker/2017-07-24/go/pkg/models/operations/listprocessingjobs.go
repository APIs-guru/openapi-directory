package operations

import (
	"openapi/pkg/models/shared"
)

type ListProcessingJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListProcessingJobsXAmzTargetEnum string

const (
	ListProcessingJobsXAmzTargetEnumSageMakerListProcessingJobs ListProcessingJobsXAmzTargetEnum = "SageMaker.ListProcessingJobs"
)

type ListProcessingJobsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListProcessingJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListProcessingJobsRequest struct {
	QueryParams ListProcessingJobsQueryParams
	Headers     ListProcessingJobsHeaders
	Request     shared.ListProcessingJobsRequest `request:"mediaType=application/json"`
}

type ListProcessingJobsResponse struct {
	ContentType                string
	ListProcessingJobsResponse *shared.ListProcessingJobsResponse
	StatusCode                 int64
}
