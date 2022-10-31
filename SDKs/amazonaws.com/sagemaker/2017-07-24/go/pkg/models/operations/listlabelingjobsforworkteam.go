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
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLabelingJobsForWorkteamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
