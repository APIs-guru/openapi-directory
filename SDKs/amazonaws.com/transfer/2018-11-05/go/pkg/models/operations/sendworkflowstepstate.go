package operations

import (
	"openapi/pkg/models/shared"
)

type SendWorkflowStepStateXAmzTargetEnum string

const (
	SendWorkflowStepStateXAmzTargetEnumTransferServiceSendWorkflowStepState SendWorkflowStepStateXAmzTargetEnum = "TransferService.SendWorkflowStepState"
)

type SendWorkflowStepStateHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SendWorkflowStepStateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SendWorkflowStepStateRequest struct {
	Headers SendWorkflowStepStateHeaders
	Request shared.SendWorkflowStepStateRequest `request:"mediaType=application/json"`
}

type SendWorkflowStepStateResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	InternalServiceError          *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	SendWorkflowStepStateResponse map[string]interface{}
	ServiceUnavailableException   *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
