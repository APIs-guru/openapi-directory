package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForResourcePathParams struct {
	ResourceArn string `pathParam:"style=simple,explode=false,name=resourceArn"`
}

type ListTagsForResourceQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListTagsForResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListTagsForResourceRequestBody struct {
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
}

type ListTagsForResourceRequest struct {
	PathParams  ListTagsForResourcePathParams
	QueryParams ListTagsForResourceQueryParams
	Headers     ListTagsForResourceHeaders
	Request     ListTagsForResourceRequestBody `request:"mediaType=application/json"`
}

type ListTagsForResourceResponse struct {
	ContentType                 string
	InternalServerException     *interface{}
	ListTagsForResourceResponse *shared.ListTagsForResourceResponse
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ValidationException         *interface{}
}
