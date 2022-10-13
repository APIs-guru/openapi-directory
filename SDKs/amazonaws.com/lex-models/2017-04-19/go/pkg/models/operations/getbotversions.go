package operations

import (
	"openapi/pkg/models/shared"
)

type GetBotVersionsPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetBotVersionsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetBotVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBotVersionsRequest struct {
	PathParams  GetBotVersionsPathParams
	QueryParams GetBotVersionsQueryParams
	Headers     GetBotVersionsHeaders
}

type GetBotVersionsResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetBotVersionsResponse   *shared.GetBotVersionsResponse
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
}
