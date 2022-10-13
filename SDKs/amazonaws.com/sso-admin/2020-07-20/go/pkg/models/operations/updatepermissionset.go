package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePermissionSetXAmzTargetEnum string

const (
	UpdatePermissionSetXAmzTargetEnumSwbExternalServiceUpdatePermissionSet UpdatePermissionSetXAmzTargetEnum = "SWBExternalService.UpdatePermissionSet"
)

type UpdatePermissionSetHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdatePermissionSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdatePermissionSetRequest struct {
	Headers UpdatePermissionSetHeaders
	Request shared.UpdatePermissionSetRequest `request:"mediaType=application/json"`
}

type UpdatePermissionSetResponse struct {
	AccessDeniedException       *interface{}
	ConflictException           *interface{}
	ContentType                 string
	InternalServerException     *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UpdatePermissionSetResponse map[string]interface{}
	ValidationException         *interface{}
}
