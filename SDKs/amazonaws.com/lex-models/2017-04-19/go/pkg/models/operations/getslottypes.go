package operations

import (
	"openapi/pkg/models/shared"
)

type GetSlotTypesQueryParams struct {
	MaxResults   *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NameContains *string `queryParam:"style=form,explode=true,name=nameContains"`
	NextToken    *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetSlotTypesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSlotTypesRequest struct {
	QueryParams GetSlotTypesQueryParams
	Headers     GetSlotTypesHeaders
}

type GetSlotTypesResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetSlotTypesResponse     *shared.GetSlotTypesResponse
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
}
