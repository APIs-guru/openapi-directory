package operations

import (
	"openapi/pkg/models/shared"
)

type ListSolutionVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListSolutionVersionsXAmzTargetEnum string

const (
	ListSolutionVersionsXAmzTargetEnumAmazonPersonalizeListSolutionVersions ListSolutionVersionsXAmzTargetEnum = "AmazonPersonalize.ListSolutionVersions"
)

type ListSolutionVersionsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSolutionVersionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListSolutionVersionsRequest struct {
	QueryParams ListSolutionVersionsQueryParams
	Headers     ListSolutionVersionsHeaders
	Request     shared.ListSolutionVersionsRequest `request:"mediaType=application/json"`
}

type ListSolutionVersionsResponse struct {
	ContentType                  string
	InvalidInputException        *interface{}
	InvalidNextTokenException    *interface{}
	ListSolutionVersionsResponse *shared.ListSolutionVersionsResponse
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
