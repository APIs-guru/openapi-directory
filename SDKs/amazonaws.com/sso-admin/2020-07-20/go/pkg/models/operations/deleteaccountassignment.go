package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAccountAssignmentXAmzTargetEnum string

const (
	DeleteAccountAssignmentXAmzTargetEnumSwbExternalServiceDeleteAccountAssignment DeleteAccountAssignmentXAmzTargetEnum = "SWBExternalService.DeleteAccountAssignment"
)

type DeleteAccountAssignmentHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAccountAssignmentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteAccountAssignmentRequest struct {
	Headers DeleteAccountAssignmentHeaders
	Request shared.DeleteAccountAssignmentRequest `request:"mediaType=application/json"`
}

type DeleteAccountAssignmentResponse struct {
	AccessDeniedException           *interface{}
	ConflictException               *interface{}
	ContentType                     string
	DeleteAccountAssignmentResponse *shared.DeleteAccountAssignmentResponse
	InternalServerException         *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	ValidationException             *interface{}
}
