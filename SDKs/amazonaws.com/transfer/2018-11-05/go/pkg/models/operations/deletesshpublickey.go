package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSSHPublicKeyXAmzTargetEnum string

const (
	DeleteSSHPublicKeyXAmzTargetEnumTransferServiceDeleteSSHPublicKey DeleteSSHPublicKeyXAmzTargetEnum = "TransferService.DeleteSshPublicKey"
)

type DeleteSSHPublicKeyHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSSHPublicKeyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
