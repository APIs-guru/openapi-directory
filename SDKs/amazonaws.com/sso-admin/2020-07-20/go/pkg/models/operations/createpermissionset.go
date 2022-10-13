package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePermissionSetXAmzTargetEnum string

const (
	CreatePermissionSetXAmzTargetEnumSwbExternalServiceCreatePermissionSet CreatePermissionSetXAmzTargetEnum = "SWBExternalService.CreatePermissionSet"
)

type CreatePermissionSetHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePermissionSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreatePermissionSetRequest struct {
	Headers CreatePermissionSetHeaders
	Request shared.CreatePermissionSetRequest `request:"mediaType=application/json"`
}

type CreatePermissionSetResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreatePermissionSetResponse   *shared.CreatePermissionSetResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
