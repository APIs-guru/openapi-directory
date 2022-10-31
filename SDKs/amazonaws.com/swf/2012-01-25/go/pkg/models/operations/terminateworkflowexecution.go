package operations

import (
	"openapi/pkg/models/shared"
)

type TerminateWorkflowExecutionXAmzTargetEnum string

const (
	TerminateWorkflowExecutionXAmzTargetEnumSimpleWorkflowServiceTerminateWorkflowExecution TerminateWorkflowExecutionXAmzTargetEnum = "SimpleWorkflowService.TerminateWorkflowExecution"
)

type TerminateWorkflowExecutionHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        TerminateWorkflowExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
