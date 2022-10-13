package operations

import (
	"openapi/pkg/models/shared"
)

type ListLabelingJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListLabelingJobsXAmzTargetEnum string

const (
	ListLabelingJobsXAmzTargetEnumSageMakerListLabelingJobs ListLabelingJobsXAmzTargetEnum = "SageMaker.ListLabelingJobs"
)

type ListLabelingJobsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLabelingJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListLabelingJobsRequest struct {
	QueryParams ListLabelingJobsQueryParams
	Headers     ListLabelingJobsHeaders
	Request     shared.ListLabelingJobsRequest `request:"mediaType=application/json"`
}

type ListLabelingJobsResponse struct {
	ContentType              string
	ListLabelingJobsResponse *shared.ListLabelingJobsResponse
	StatusCode               int64
}
