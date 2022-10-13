package operations

import (
	"openapi/pkg/models/shared"
)

type ListRobotsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListRobotsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListRobotsRequestBody struct {
	Filters    []shared.Filter `json:"filters"`
	MaxResults *int64          `json:"maxResults"`
	NextToken  *string         `json:"nextToken"`
}

type ListRobotsRequest struct {
	QueryParams ListRobotsQueryParams
	Headers     ListRobotsHeaders
	Request     ListRobotsRequestBody `request:"mediaType=application/json"`
}

type ListRobotsResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	InvalidParameterException *interface{}
	ListRobotsResponse        *shared.ListRobotsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
