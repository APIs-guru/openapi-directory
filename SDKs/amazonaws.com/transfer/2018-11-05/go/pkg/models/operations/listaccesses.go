package operations

import (
	"openapi/pkg/models/shared"
)

type ListAccessesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAccessesXAmzTargetEnum string

const (
	ListAccessesXAmzTargetEnumTransferServiceListAccesses ListAccessesXAmzTargetEnum = "TransferService.ListAccesses"
)

type ListAccessesHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAccessesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAccessesRequest struct {
	QueryParams ListAccessesQueryParams
	Headers     ListAccessesHeaders
	Request     shared.ListAccessesRequest `request:"mediaType=application/json"`
}

type ListAccessesResponse struct {
	ContentType                 string
	InternalServiceError        *interface{}
	InvalidNextTokenException   *interface{}
	InvalidRequestException     *interface{}
	ListAccessesResponse        *shared.ListAccessesResponse
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
