package operations

import (
	"openapi/pkg/models/shared"
)

type ListStudioComponentsPathParams struct {
	StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
}

type ListStudioComponentsQueryParams struct {
	MaxResults *int64   `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string  `queryParam:"style=form,explode=true,name=nextToken"`
	States     []string `queryParam:"style=form,explode=true,name=states"`
	Types      []string `queryParam:"style=form,explode=true,name=types"`
}

type ListStudioComponentsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListStudioComponentsRequest struct {
	PathParams  ListStudioComponentsPathParams
	QueryParams ListStudioComponentsQueryParams
	Headers     ListStudioComponentsHeaders
}

type ListStudioComponentsResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerErrorException  *interface{}
	ListStudioComponentsResponse  *shared.ListStudioComponentsResponse
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
