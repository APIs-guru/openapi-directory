package operations

import (
	"openapi/pkg/models/shared"
)

type RequestCancelWorkflowExecutionXAmzTargetEnum string

const (
	RequestCancelWorkflowExecutionXAmzTargetEnumSimpleWorkflowServiceRequestCancelWorkflowExecution RequestCancelWorkflowExecutionXAmzTargetEnum = "SimpleWorkflowService.RequestCancelWorkflowExecution"
)

type RequestCancelWorkflowExecutionHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RequestCancelWorkflowExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
