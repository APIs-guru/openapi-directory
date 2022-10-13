package operations

import (
	"openapi/pkg/models/shared"
)

type ListFleetsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFleetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListFleetsRequestBody struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}

type ListFleetsRequest struct {
	QueryParams ListFleetsQueryParams
	Headers     ListFleetsHeaders
	Request     ListFleetsRequestBody `request:"mediaType=application/json"`
}

type ListFleetsResponse struct {
	ContentType                  string
	InternalServerErrorException *interface{}
	InvalidRequestException      *interface{}
	ListFleetsResponse           *shared.ListFleetsResponse
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UnauthorizedException        *interface{}
}
