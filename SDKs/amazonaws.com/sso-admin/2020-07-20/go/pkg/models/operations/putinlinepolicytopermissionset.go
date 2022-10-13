package operations

import (
	"openapi/pkg/models/shared"
)

type PutInlinePolicyToPermissionSetXAmzTargetEnum string

const (
	PutInlinePolicyToPermissionSetXAmzTargetEnumSwbExternalServicePutInlinePolicyToPermissionSet PutInlinePolicyToPermissionSetXAmzTargetEnum = "SWBExternalService.PutInlinePolicyToPermissionSet"
)

type PutInlinePolicyToPermissionSetHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutInlinePolicyToPermissionSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutInlinePolicyToPermissionSetRequest struct {
	Headers PutInlinePolicyToPermissionSetHeaders
	Request shared.PutInlinePolicyToPermissionSetRequest `request:"mediaType=application/json"`
}

type PutInlinePolicyToPermissionSetResponse struct {
	AccessDeniedException                  *interface{}
	ConflictException                      *interface{}
	ContentType                            string
	InternalServerException                *interface{}
	PutInlinePolicyToPermissionSetResponse map[string]interface{}
	ResourceNotFoundException              *interface{}
	ServiceQuotaExceededException          *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
	ValidationException                    *interface{}
}
