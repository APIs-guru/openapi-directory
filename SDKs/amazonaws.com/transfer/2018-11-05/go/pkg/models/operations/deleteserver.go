package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteServerXAmzTargetEnum string

const (
	DeleteServerXAmzTargetEnumTransferServiceDeleteServer DeleteServerXAmzTargetEnum = "TransferService.DeleteServer"
)

type DeleteServerHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteServerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteServerRequest struct {
	Headers DeleteServerHeaders
	Request shared.DeleteServerRequest `request:"mediaType=application/json"`
}

type DeleteServerResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
