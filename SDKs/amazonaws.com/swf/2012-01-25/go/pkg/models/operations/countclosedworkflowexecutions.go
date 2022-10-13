package operations

import (
	"openapi/pkg/models/shared"
)

type CountClosedWorkflowExecutionsXAmzTargetEnum string

const (
	CountClosedWorkflowExecutionsXAmzTargetEnumSimpleWorkflowServiceCountClosedWorkflowExecutions CountClosedWorkflowExecutionsXAmzTargetEnum = "SimpleWorkflowService.CountClosedWorkflowExecutions"
)

type CountClosedWorkflowExecutionsHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CountClosedWorkflowExecutionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CountClosedWorkflowExecutionsRequest struct {
	Headers CountClosedWorkflowExecutionsHeaders
	Request shared.CountClosedWorkflowExecutionsInput `request:"mediaType=application/json"`
}

type CountClosedWorkflowExecutionsResponse struct {
	ContentType                string
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
	WorkflowExecutionCount     *shared.WorkflowExecutionCount
}
