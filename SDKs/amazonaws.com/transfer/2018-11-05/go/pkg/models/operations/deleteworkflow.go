package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWorkflowXAmzTargetEnum string

const (
	DeleteWorkflowXAmzTargetEnumTransferServiceDeleteWorkflow DeleteWorkflowXAmzTargetEnum = "TransferService.DeleteWorkflow"
)

type DeleteWorkflowHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteWorkflowXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteWorkflowRequest struct {
	Headers DeleteWorkflowHeaders
	Request shared.DeleteWorkflowRequest `request:"mediaType=application/json"`
}

type DeleteWorkflowResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
