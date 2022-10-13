package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorkflowXAmzTargetEnum string

const (
	CreateWorkflowXAmzTargetEnumTransferServiceCreateWorkflow CreateWorkflowXAmzTargetEnum = "TransferService.CreateWorkflow"
)

type CreateWorkflowHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateWorkflowXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateWorkflowRequest struct {
	Headers CreateWorkflowHeaders
	Request shared.CreateWorkflowRequest `request:"mediaType=application/json"`
}

type CreateWorkflowResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	CreateWorkflowResponse      *shared.CreateWorkflowResponse
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	ResourceExistsException     *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
