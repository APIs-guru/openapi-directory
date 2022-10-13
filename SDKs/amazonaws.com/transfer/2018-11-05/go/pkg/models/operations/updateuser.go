package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserXAmzTargetEnum string

const (
	UpdateUserXAmzTargetEnumTransferServiceUpdateUser UpdateUserXAmzTargetEnum = "TransferService.UpdateUser"
)

type UpdateUserHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateUserXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateUserRequest struct {
	Headers UpdateUserHeaders
	Request shared.UpdateUserRequest `request:"mediaType=application/json"`
}

type UpdateUserResponse struct {
	ContentType                 string
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UpdateUserResponse          *shared.UpdateUserResponse
}
