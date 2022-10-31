package operations

import (
	"openapi/pkg/models/shared"
)

type ListPlaybackKeyPairsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListPlaybackKeyPairsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListPlaybackKeyPairsRequestBody struct {
	MaxResults *int64  `json:"maxResults,omitempty"`
	NextToken  *string `json:"nextToken,omitempty"`
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
