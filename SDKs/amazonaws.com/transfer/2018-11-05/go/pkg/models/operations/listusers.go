package operations

import (
	"openapi/pkg/models/shared"
)

type ListUsersQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListUsersXAmzTargetEnum string

const (
	ListUsersXAmzTargetEnumTransferServiceListUsers ListUsersXAmzTargetEnum = "TransferService.ListUsers"
)

type ListUsersHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListUsersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListUsersRequest struct {
	QueryParams ListUsersQueryParams
	Headers     ListUsersHeaders
	Request     shared.ListUsersRequest `request:"mediaType=application/json"`
}

type ListUsersResponse struct {
	ContentType                 string
	InternalServiceError        *interface{}
	InvalidNextTokenException   *interface{}
	InvalidRequestException     *interface{}
	ListUsersResponse           *shared.ListUsersResponse
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
