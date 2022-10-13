package operations

import (
	"openapi/pkg/models/shared"
)

type ProvisionPermissionSetXAmzTargetEnum string

const (
	ProvisionPermissionSetXAmzTargetEnumSwbExternalServiceProvisionPermissionSet ProvisionPermissionSetXAmzTargetEnum = "SWBExternalService.ProvisionPermissionSet"
)

type ProvisionPermissionSetHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ProvisionPermissionSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ProvisionPermissionSetRequest struct {
	Headers ProvisionPermissionSetHeaders
	Request shared.ProvisionPermissionSetRequest `request:"mediaType=application/json"`
}

type ProvisionPermissionSetResponse struct {
	AccessDeniedException          *interface{}
	ConflictException              *interface{}
	ContentType                    string
	InternalServerException        *interface{}
	ProvisionPermissionSetResponse *shared.ProvisionPermissionSetResponse
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	ValidationException            *interface{}
}
