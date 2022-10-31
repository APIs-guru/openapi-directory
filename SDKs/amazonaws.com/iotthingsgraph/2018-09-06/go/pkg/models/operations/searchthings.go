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
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SearchThingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
