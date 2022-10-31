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
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLabelingJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
