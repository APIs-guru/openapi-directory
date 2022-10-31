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
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAccessesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
