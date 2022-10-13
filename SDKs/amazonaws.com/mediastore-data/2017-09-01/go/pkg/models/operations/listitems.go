package operations

import (
	"openapi/pkg/models/shared"
)

type ListItemsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
	Path       *string `queryParam:"style=form,explode=true,name=Path"`
}

type ListItemsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListItemsRequest struct {
	QueryParams ListItemsQueryParams
	Headers     ListItemsHeaders
}

type ListItemsResponse struct {
	ContainerNotFoundException *interface{}
	ContentType                string
	InternalServerError        *interface{}
	ListItemsResponse          *shared.ListItemsResponse
	StatusCode                 int64
}
