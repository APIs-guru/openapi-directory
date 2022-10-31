package operations

import (
	"openapi/pkg/models/shared"
)

type ListCallAnalyticsJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListCallAnalyticsJobsXAmzTargetEnum string

const (
	ListCallAnalyticsJobsXAmzTargetEnumTranscribeListCallAnalyticsJobs ListCallAnalyticsJobsXAmzTargetEnum = "Transcribe.ListCallAnalyticsJobs"
)

type ListCallAnalyticsJobsHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCallAnalyticsJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListCallAnalyticsJobsRequest struct {
	QueryParams ListCallAnalyticsJobsQueryParams
	Headers     ListCallAnalyticsJobsHeaders
	Request     shared.ListCallAnalyticsJobsRequest `request:"mediaType=application/json"`
}

type ListCallAnalyticsJobsResponse struct {
	BadRequestException           *interface{}
	ContentType                   string
	InternalFailureException      *interface{}
	LimitExceededException        *interface{}
	ListCallAnalyticsJobsResponse *shared.ListCallAnalyticsJobsResponse
	StatusCode                    int64
}
