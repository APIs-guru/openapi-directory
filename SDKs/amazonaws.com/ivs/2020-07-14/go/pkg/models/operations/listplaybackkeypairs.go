package operations

import (
	"openapi/pkg/models/shared"
)

type ListPlaybackKeyPairsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListPlaybackKeyPairsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListPlaybackKeyPairsRequestBody struct {
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
}

type ListPlaybackKeyPairsRequest struct {
	QueryParams ListPlaybackKeyPairsQueryParams
	Headers     ListPlaybackKeyPairsHeaders
	Request     ListPlaybackKeyPairsRequestBody `request:"mediaType=application/json"`
}

type ListPlaybackKeyPairsResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	ListPlaybackKeyPairsResponse *shared.ListPlaybackKeyPairsResponse
	StatusCode                   int64
	ValidationException          *interface{}
}
