package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAccessXAmzTargetEnum string

const (
	CreateAccessXAmzTargetEnumTransferServiceCreateAccess CreateAccessXAmzTargetEnum = "TransferService.CreateAccess"
)

type CreateAccessHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAccessXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateAccessRequest struct {
	Headers CreateAccessHeaders
	Request shared.CreateAccessRequest `request:"mediaType=application/json"`
}

type CreateAccessResponse struct {
	ContentType                 string
	CreateAccessResponse        *shared.CreateAccessResponse
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	ResourceExistsException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
