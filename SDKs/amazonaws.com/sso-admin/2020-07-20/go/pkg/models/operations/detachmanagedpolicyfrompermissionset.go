package operations

import (
	"openapi/pkg/models/shared"
)

type DetachManagedPolicyFromPermissionSetXAmzTargetEnum string

const (
	DetachManagedPolicyFromPermissionSetXAmzTargetEnumSwbExternalServiceDetachManagedPolicyFromPermissionSet DetachManagedPolicyFromPermissionSetXAmzTargetEnum = "SWBExternalService.DetachManagedPolicyFromPermissionSet"
)

type DetachManagedPolicyFromPermissionSetHeaders struct {
	XAmzAlgorithm     *string                                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DetachManagedPolicyFromPermissionSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DetachManagedPolicyFromPermissionSetRequest struct {
	Headers DetachManagedPolicyFromPermissionSetHeaders
	Request shared.DetachManagedPolicyFromPermissionSetRequest `request:"mediaType=application/json"`
}

type DetachManagedPolicyFromPermissionSetResponse struct {
	AccessDeniedException                        *interface{}
	ConflictException                            *interface{}
	ContentType                                  string
	DetachManagedPolicyFromPermissionSetResponse map[string]interface{}
	InternalServerException                      *interface{}
	ResourceNotFoundException                    *interface{}
	StatusCode                                   int64
	ThrottlingException                          *interface{}
	ValidationException                          *interface{}
}
