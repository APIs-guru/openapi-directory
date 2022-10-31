package operations

import (
	"openapi/pkg/models/shared"
)

type ListTranscriptionJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTranscriptionJobsXAmzTargetEnum string

const (
	ListTranscriptionJobsXAmzTargetEnumTranscribeListTranscriptionJobs ListTranscriptionJobsXAmzTargetEnum = "Transcribe.ListTranscriptionJobs"
)

type ListTranscriptionJobsHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTranscriptionJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListTranscriptionJobsRequest struct {
	QueryParams ListTranscriptionJobsQueryParams
	Headers     ListTranscriptionJobsHeaders
	Request     shared.ListTranscriptionJobsRequest `request:"mediaType=application/json"`
}

type ListTranscriptionJobsResponse struct {
	BadRequestException           *interface{}
	ContentType                   string
	InternalFailureException      *interface{}
	LimitExceededException        *interface{}
	ListTranscriptionJobsResponse *shared.ListTranscriptionJobsResponse
	StatusCode                    int64
}
