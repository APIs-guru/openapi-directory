package operations

import (
	"openapi/pkg/models/shared"
)

type CountOpenWorkflowExecutionsXAmzTargetEnum string

const (
	CountOpenWorkflowExecutionsXAmzTargetEnumSimpleWorkflowServiceCountOpenWorkflowExecutions CountOpenWorkflowExecutionsXAmzTargetEnum = "SimpleWorkflowService.CountOpenWorkflowExecutions"
)

type CountOpenWorkflowExecutionsHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CountOpenWorkflowExecutionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CountOpenWorkflowExecutionsRequest struct {
	Headers CountOpenWorkflowExecutionsHeaders
	Request shared.CountOpenWorkflowExecutionsInput `request:"mediaType=application/json"`
}

type CountOpenWorkflowExecutionsResponse struct {
	ContentType                string
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
	WorkflowExecutionCount     *shared.WorkflowExecutionCount
}
