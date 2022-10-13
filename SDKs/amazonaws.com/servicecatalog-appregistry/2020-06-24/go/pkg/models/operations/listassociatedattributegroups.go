package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssociatedAttributeGroupsPathParams struct {
	Application string `pathParam:"style=simple,explode=false,name=application"`
}

type ListAssociatedAttributeGroupsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListAssociatedAttributeGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListAssociatedAttributeGroupsRequest struct {
	PathParams  ListAssociatedAttributeGroupsPathParams
	QueryParams ListAssociatedAttributeGroupsQueryParams
	Headers     ListAssociatedAttributeGroupsHeaders
}

type ListAssociatedAttributeGroupsResponse struct {
	ContentType                           string
	InternalServerException               *interface{}
	ListAssociatedAttributeGroupsResponse *shared.ListAssociatedAttributeGroupsResponse
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
	ValidationException                   *interface{}
}
