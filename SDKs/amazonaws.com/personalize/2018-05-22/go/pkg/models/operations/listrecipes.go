package operations

import (
	"openapi/pkg/models/shared"
)

type ListRecipesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListRecipesXAmzTargetEnum string

const (
	ListRecipesXAmzTargetEnumAmazonPersonalizeListRecipes ListRecipesXAmzTargetEnum = "AmazonPersonalize.ListRecipes"
)

type ListRecipesHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRecipesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListRecipesRequest struct {
	QueryParams ListRecipesQueryParams
	Headers     ListRecipesHeaders
	Request     shared.ListRecipesRequest `request:"mediaType=application/json"`
}

type ListRecipesResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	ListRecipesResponse       *shared.ListRecipesResponse
	StatusCode                int64
}
