package operations

import (
	"openapi/pkg/models/shared"
)

type AttachManagedPolicyToPermissionSetXAmzTargetEnum string

const (
	AttachManagedPolicyToPermissionSetXAmzTargetEnumSwbExternalServiceAttachManagedPolicyToPermissionSet AttachManagedPolicyToPermissionSetXAmzTargetEnum = "SWBExternalService.AttachManagedPolicyToPermissionSet"
)

type AttachManagedPolicyToPermissionSetHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AttachManagedPolicyToPermissionSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AttachManagedPolicyToPermissionSetRequest struct {
	Headers AttachManagedPolicyToPermissionSetHeaders
	Request shared.AttachManagedPolicyToPermissionSetRequest `request:"mediaType=application/json"`
}

type AttachManagedPolicyToPermissionSetResponse struct {
	AccessDeniedException                      *interface{}
	AttachManagedPolicyToPermissionSetResponse map[string]interface{}
	ConflictException                          *interface{}
	ContentType                                string
	InternalServerException                    *interface{}
	ResourceNotFoundException                  *interface{}
	ServiceQuotaExceededException              *interface{}
	StatusCode                                 int64
	ThrottlingException                        *interface{}
	ValidationException                        *interface{}
}
