package operations

import (
	"openapi/pkg/models/shared"
)

type GetSlotTypeVersionsPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetSlotTypeVersionsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetSlotTypeVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSlotTypeVersionsRequest struct {
	PathParams  GetSlotTypeVersionsPathParams
	QueryParams GetSlotTypeVersionsQueryParams
	Headers     GetSlotTypeVersionsHeaders
}

type GetSlotTypeVersionsResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	GetSlotTypeVersionsResponse *shared.GetSlotTypeVersionsResponse
	InternalFailureException    *interface{}
	LimitExceededException      *interface{}
	NotFoundException           *interface{}
	StatusCode                  int64
}
