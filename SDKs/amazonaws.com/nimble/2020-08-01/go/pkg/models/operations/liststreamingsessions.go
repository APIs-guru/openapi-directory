package operations

import (
	"openapi/pkg/models/shared"
)

type ListStreamingSessionsPathParams struct {
	StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
}

type ListStreamingSessionsQueryParams struct {
	CreatedBy  *string `queryParam:"style=form,explode=true,name=createdBy"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
	OwnedBy    *string `queryParam:"style=form,explode=true,name=ownedBy"`
	SessionIds *string `queryParam:"style=form,explode=true,name=sessionIds"`
}

type ListStreamingSessionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListStreamingSessionsRequest struct {
	PathParams  ListStreamingSessionsPathParams
	QueryParams ListStreamingSessionsQueryParams
	Headers     ListStreamingSessionsHeaders
}

type ListStreamingSessionsResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerErrorException  *interface{}
	ListStreamingSessionsResponse *shared.ListStreamingSessionsResponse
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
