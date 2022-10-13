package operations

import (
	"openapi/pkg/models/shared"
)

type ListStreamsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListStreamsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListStreamsRequestBody struct {
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
}

type ListStreamsRequest struct {
	QueryParams ListStreamsQueryParams
	Headers     ListStreamsHeaders
	Request     ListStreamsRequestBody `request:"mediaType=application/json"`
}

type ListStreamsResponse struct {
	AccessDeniedException *interface{}
	ContentType           string
	ListStreamsResponse   *shared.ListStreamsResponse
	StatusCode            int64
}
