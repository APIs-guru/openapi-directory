package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUserXAmzTargetEnum string

const (
	CreateUserXAmzTargetEnumTransferServiceCreateUser CreateUserXAmzTargetEnum = "TransferService.CreateUser"
)

type CreateUserHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateUserXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateUserRequest struct {
	Headers CreateUserHeaders
	Request shared.CreateUserRequest `request:"mediaType=application/json"`
}

type CreateUserResponse struct {
	ContentType                 string
	CreateUserResponse          *shared.CreateUserResponse
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	ResourceExistsException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
