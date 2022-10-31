package operations

import (
	"openapi/pkg/models/shared"
)

type ListResourceTypesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListResourceTypesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListResourceTypesRequestBody struct {
	MaxResults *int64  `json:"maxResults,omitempty"`
	NextToken  *string `json:"nextToken,omitempty"`
}

type ListResourceTypesRequest struct {
	QueryParams ListResourceTypesQueryParams
	Headers     ListResourceTypesHeaders
	Request     ListResourceTypesRequestBody `request:"mediaType=application/json"`
}

type ListResourceTypesResponse struct {
	ContentType                 string
	InvalidNextTokenException   *interface{}
	InvalidParameterException   *interface{}
	ListResourceTypesResponse   *shared.ListResourceTypesResponse
	ServerInternalException     *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
