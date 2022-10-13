package operations

import (
	"openapi/pkg/models/shared"
)

type ListTrainingJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTrainingJobsXAmzTargetEnum string

const (
	ListTrainingJobsXAmzTargetEnumSageMakerListTrainingJobs ListTrainingJobsXAmzTargetEnum = "SageMaker.ListTrainingJobs"
)

type ListTrainingJobsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTrainingJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTrainingJobsRequest struct {
	QueryParams ListTrainingJobsQueryParams
	Headers     ListTrainingJobsHeaders
	Request     shared.ListTrainingJobsRequest `request:"mediaType=application/json"`
}

type ListTrainingJobsResponse struct {
	ContentType              string
	ListTrainingJobsResponse *shared.ListTrainingJobsResponse
	StatusCode               int64
}
