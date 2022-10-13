package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAccessXAmzTargetEnum string

const (
	UpdateAccessXAmzTargetEnumTransferServiceUpdateAccess UpdateAccessXAmzTargetEnum = "TransferService.UpdateAccess"
)

type UpdateAccessHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAccessXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateAccessRequest struct {
	Headers UpdateAccessHeaders
	Request shared.UpdateAccessRequest `request:"mediaType=application/json"`
}

type UpdateAccessResponse struct {
	ContentType                 string
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	ResourceExistsException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	UpdateAccessResponse        *shared.UpdateAccessResponse
}
