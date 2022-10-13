package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAccountAssignmentXAmzTargetEnum string

const (
	CreateAccountAssignmentXAmzTargetEnumSwbExternalServiceCreateAccountAssignment CreateAccountAssignmentXAmzTargetEnum = "SWBExternalService.CreateAccountAssignment"
)

type CreateAccountAssignmentHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAccountAssignmentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateAccountAssignmentRequest struct {
	Headers CreateAccountAssignmentHeaders
	Request shared.CreateAccountAssignmentRequest `request:"mediaType=application/json"`
}

type CreateAccountAssignmentResponse struct {
	AccessDeniedException           *interface{}
	ConflictException               *interface{}
	ContentType                     string
	CreateAccountAssignmentResponse *shared.CreateAccountAssignmentResponse
	InternalServerException         *interface{}
	ResourceNotFoundException       *interface{}
	ServiceQuotaExceededException   *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	ValidationException             *interface{}
}
