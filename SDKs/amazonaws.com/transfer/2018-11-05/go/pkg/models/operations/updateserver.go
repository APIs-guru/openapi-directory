package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServerXAmzTargetEnum string

const (
	UpdateServerXAmzTargetEnumTransferServiceUpdateServer UpdateServerXAmzTargetEnum = "TransferService.UpdateServer"
)

type UpdateServerHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateServerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateServerRequest struct {
	Headers UpdateServerHeaders
	Request shared.UpdateServerRequest `request:"mediaType=application/json"`
}

type UpdateServerResponse struct {
	AccessDeniedException       *interface{}
	ConflictException           *interface{}
	ContentType                 string
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	ResourceExistsException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UpdateServerResponse        *shared.UpdateServerResponse
}
