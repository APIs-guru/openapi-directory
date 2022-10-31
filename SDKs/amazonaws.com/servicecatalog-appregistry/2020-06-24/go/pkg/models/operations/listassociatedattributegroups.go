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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
