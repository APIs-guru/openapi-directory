package operations

import (
	"openapi/pkg/models/shared"
)

type PutInlinePolicyToPermissionSetXAmzTargetEnum string

const (
	PutInlinePolicyToPermissionSetXAmzTargetEnumSwbExternalServicePutInlinePolicyToPermissionSet PutInlinePolicyToPermissionSetXAmzTargetEnum = "SWBExternalService.PutInlinePolicyToPermissionSet"
)

type PutInlinePolicyToPermissionSetHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutInlinePolicyToPermissionSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
