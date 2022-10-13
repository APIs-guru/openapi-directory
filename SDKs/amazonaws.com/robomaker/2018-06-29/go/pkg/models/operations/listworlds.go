package operations

import (
	"openapi/pkg/models/shared"
)

type ListWorldsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListWorldsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListWorldsRequestBody struct {
	Filters    []shared.Filter `json:"filters"`
	MaxResults *int64          `json:"maxResults"`
	NextToken  *string         `json:"nextToken"`
}

type ListWorldsRequest struct {
	QueryParams ListWorldsQueryParams
	Headers     ListWorldsHeaders
	Request     ListWorldsRequestBody `request:"mediaType=application/json"`
}

type ListWorldsResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	InvalidParameterException *interface{}
	ListWorldsResponse        *shared.ListWorldsResponse
	StatusCode                int64
	ThrottlingException       *interface{}
}
