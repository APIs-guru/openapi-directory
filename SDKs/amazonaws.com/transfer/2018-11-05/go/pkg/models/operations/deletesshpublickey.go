package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSSHPublicKeyXAmzTargetEnum string

const (
	DeleteSSHPublicKeyXAmzTargetEnumTransferServiceDeleteSSHPublicKey DeleteSSHPublicKeyXAmzTargetEnum = "TransferService.DeleteSshPublicKey"
)

type DeleteSSHPublicKeyHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSSHPublicKeyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteSSHPublicKeyRequest struct {
	Headers DeleteSSHPublicKeyHeaders
	Request shared.DeleteSSHPublicKeyRequest `request:"mediaType=application/json"`
}

type DeleteSSHPublicKeyResponse struct {
	ContentType                 string
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
