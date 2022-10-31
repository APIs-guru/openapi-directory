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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
