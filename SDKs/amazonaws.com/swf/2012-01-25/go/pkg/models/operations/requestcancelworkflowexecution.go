package operations

import (
	"openapi/pkg/models/shared"
)

type RequestCancelWorkflowExecutionXAmzTargetEnum string

const (
	RequestCancelWorkflowExecutionXAmzTargetEnumSimpleWorkflowServiceRequestCancelWorkflowExecution RequestCancelWorkflowExecutionXAmzTargetEnum = "SimpleWorkflowService.RequestCancelWorkflowExecution"
)

type RequestCancelWorkflowExecutionHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RequestCancelWorkflowExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RequestCancelWorkflowExecutionRequest struct {
	Headers RequestCancelWorkflowExecutionHeaders
	Request shared.RequestCancelWorkflowExecutionInput `request:"mediaType=application/json"`
}

type RequestCancelWorkflowExecutionResponse struct {
	ContentType                string
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
}
