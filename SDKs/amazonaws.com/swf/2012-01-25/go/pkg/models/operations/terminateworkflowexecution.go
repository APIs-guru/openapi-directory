package operations

import (
	"openapi/pkg/models/shared"
)

type TerminateWorkflowExecutionXAmzTargetEnum string

const (
	TerminateWorkflowExecutionXAmzTargetEnumSimpleWorkflowServiceTerminateWorkflowExecution TerminateWorkflowExecutionXAmzTargetEnum = "SimpleWorkflowService.TerminateWorkflowExecution"
)

type TerminateWorkflowExecutionHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TerminateWorkflowExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TerminateWorkflowExecutionRequest struct {
	Headers TerminateWorkflowExecutionHeaders
	Request shared.TerminateWorkflowExecutionInput `request:"mediaType=application/json"`
}

type TerminateWorkflowExecutionResponse struct {
	ContentType                string
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
}
