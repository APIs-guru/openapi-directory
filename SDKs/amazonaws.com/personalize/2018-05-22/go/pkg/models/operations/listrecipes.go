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
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRecipesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
