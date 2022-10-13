package operations

import (
	"openapi/pkg/models/shared"
)

type ListHyperParameterTuningJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListHyperParameterTuningJobsXAmzTargetEnum string

const (
	ListHyperParameterTuningJobsXAmzTargetEnumSageMakerListHyperParameterTuningJobs ListHyperParameterTuningJobsXAmzTargetEnum = "SageMaker.ListHyperParameterTuningJobs"
)

type ListHyperParameterTuningJobsHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListHyperParameterTuningJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListHyperParameterTuningJobsRequest struct {
	QueryParams ListHyperParameterTuningJobsQueryParams
	Headers     ListHyperParameterTuningJobsHeaders
	Request     shared.ListHyperParameterTuningJobsRequest `request:"mediaType=application/json"`
}

type ListHyperParameterTuningJobsResponse struct {
	ContentType                          string
	ListHyperParameterTuningJobsResponse *shared.ListHyperParameterTuningJobsResponse
	StatusCode                           int64
}
