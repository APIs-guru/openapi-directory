package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAccessXAmzTargetEnum string

const (
	UpdateAccessXAmzTargetEnumTransferServiceUpdateAccess UpdateAccessXAmzTargetEnum = "TransferService.UpdateAccess"
)

type UpdateAccessHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAccessXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
