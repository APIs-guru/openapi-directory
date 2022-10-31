package operations

import (
	"openapi/pkg/models/shared"
)

type StartWorkflowExecutionXAmzTargetEnum string

const (
	StartWorkflowExecutionXAmzTargetEnumSimpleWorkflowServiceStartWorkflowExecution StartWorkflowExecutionXAmzTargetEnum = "SimpleWorkflowService.StartWorkflowExecution"
)

type StartWorkflowExecutionHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartWorkflowExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartWorkflowExecutionRequest struct {
	Headers StartWorkflowExecutionHeaders
	Request shared.StartWorkflowExecutionInput `request:"mediaType=application/json"`
}

type StartWorkflowExecutionResponse struct {
	ContentType                          string
	DefaultUndefinedFault                *interface{}
	LimitExceededFault                   *interface{}
	OperationNotPermittedFault           *interface{}
	Run                                  *shared.Run
	StatusCode                           int64
	TypeDeprecatedFault                  *interface{}
	UnknownResourceFault                 *interface{}
	WorkflowExecutionAlreadyStartedFault *interface{}
}
