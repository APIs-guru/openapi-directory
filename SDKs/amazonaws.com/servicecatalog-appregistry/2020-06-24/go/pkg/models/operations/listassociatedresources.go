package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssociatedResourcesPathParams struct {
	Application string `pathParam:"style=simple,explode=false,name=application"`
}

type ListAssociatedResourcesQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListAssociatedResourcesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListAssociatedResourcesRequest struct {
	PathParams  ListAssociatedResourcesPathParams
	QueryParams ListAssociatedResourcesQueryParams
	Headers     ListAssociatedResourcesHeaders
}

type ListAssociatedResourcesResponse struct {
	ContentType                     string
	InternalServerException         *interface{}
	ListAssociatedResourcesResponse *shared.ListAssociatedResourcesResponse
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	ValidationException             *interface{}
}
