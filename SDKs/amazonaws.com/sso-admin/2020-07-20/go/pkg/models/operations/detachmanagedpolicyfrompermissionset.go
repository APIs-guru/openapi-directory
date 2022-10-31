package operations

import (
	"openapi/pkg/models/shared"
)

type DetachManagedPolicyFromPermissionSetXAmzTargetEnum string

const (
	DetachManagedPolicyFromPermissionSetXAmzTargetEnumSwbExternalServiceDetachManagedPolicyFromPermissionSet DetachManagedPolicyFromPermissionSetXAmzTargetEnum = "SWBExternalService.DetachManagedPolicyFromPermissionSet"
)

type DetachManagedPolicyFromPermissionSetHeaders struct {
	XAmzAlgorithm     *string                                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DetachManagedPolicyFromPermissionSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
