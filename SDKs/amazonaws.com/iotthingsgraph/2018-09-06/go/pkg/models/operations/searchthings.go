package operations

import (
	"openapi/pkg/models/shared"
)

type SearchThingsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type SearchThingsXAmzTargetEnum string

const (
	SearchThingsXAmzTargetEnumIotThingsGraphFrontEndServiceSearchThings SearchThingsXAmzTargetEnum = "IotThingsGraphFrontEndService.SearchThings"
)

type SearchThingsHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SearchThingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SearchThingsRequest struct {
	QueryParams SearchThingsQueryParams
	Headers     SearchThingsHeaders
	Request     shared.SearchThingsRequest `request:"mediaType=application/json"`
}

type SearchThingsResponse struct {
	ContentType               string
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	SearchThingsResponse      *shared.SearchThingsResponse
	StatusCode                int64
	ThrottlingException       *interface{}
}
