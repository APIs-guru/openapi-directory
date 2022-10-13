package operations

import (
	"openapi/pkg/models/shared"
)

type ListLabelingJobsForWorkteamQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListLabelingJobsForWorkteamXAmzTargetEnum string

const (
	ListLabelingJobsForWorkteamXAmzTargetEnumSageMakerListLabelingJobsForWorkteam ListLabelingJobsForWorkteamXAmzTargetEnum = "SageMaker.ListLabelingJobsForWorkteam"
)

type ListLabelingJobsForWorkteamHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLabelingJobsForWorkteamXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListLabelingJobsForWorkteamRequest struct {
	QueryParams ListLabelingJobsForWorkteamQueryParams
	Headers     ListLabelingJobsForWorkteamHeaders
	Request     shared.ListLabelingJobsForWorkteamRequest `request:"mediaType=application/json"`
}

type ListLabelingJobsForWorkteamResponse struct {
	ContentType                         string
	ListLabelingJobsForWorkteamResponse *shared.ListLabelingJobsForWorkteamResponse
	ResourceNotFound                    *interface{}
	StatusCode                          int64
}
