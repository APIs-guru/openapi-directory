package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePermissionSetXAmzTargetEnum string

const (
	DeletePermissionSetXAmzTargetEnumSwbExternalServiceDeletePermissionSet DeletePermissionSetXAmzTargetEnum = "SWBExternalService.DeletePermissionSet"
)

type DeletePermissionSetHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePermissionSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeletePermissionSetRequest struct {
	Headers DeletePermissionSetHeaders
	Request shared.DeletePermissionSetRequest `request:"mediaType=application/json"`
}

type DeletePermissionSetResponse struct {
	AccessDeniedException       *interface{}
	ConflictException           *interface{}
	ContentType                 string
	DeletePermissionSetResponse map[string]interface{}
	InternalServerException     *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
