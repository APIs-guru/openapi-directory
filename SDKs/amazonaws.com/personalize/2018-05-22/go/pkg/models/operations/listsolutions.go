package operations

import (
	"openapi/pkg/models/shared"
)

type ListSolutionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListSolutionsXAmzTargetEnum string

const (
	ListSolutionsXAmzTargetEnumAmazonPersonalizeListSolutions ListSolutionsXAmzTargetEnum = "AmazonPersonalize.ListSolutions"
)

type ListSolutionsHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSolutionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListSolutionsRequest struct {
	QueryParams ListSolutionsQueryParams
	Headers     ListSolutionsHeaders
	Request     shared.ListSolutionsRequest `request:"mediaType=application/json"`
}

type ListSolutionsResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	InvalidNextTokenException *interface{}
	ListSolutionsResponse     *shared.ListSolutionsResponse
	StatusCode                int64
}
