package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAccessXAmzTargetEnum string

const (
	DeleteAccessXAmzTargetEnumTransferServiceDeleteAccess DeleteAccessXAmzTargetEnum = "TransferService.DeleteAccess"
)

type DeleteAccessHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAccessXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteAccessRequest struct {
	Headers DeleteAccessHeaders
	Request shared.DeleteAccessRequest `request:"mediaType=application/json"`
}

type DeleteAccessResponse struct {
	ContentType                 string
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
