package operations

import (
	"openapi/pkg/models/shared"
)

type CountOpenWorkflowExecutionsXAmzTargetEnum string

const (
	CountOpenWorkflowExecutionsXAmzTargetEnumSimpleWorkflowServiceCountOpenWorkflowExecutions CountOpenWorkflowExecutionsXAmzTargetEnum = "SimpleWorkflowService.CountOpenWorkflowExecutions"
)

type CountOpenWorkflowExecutionsHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CountOpenWorkflowExecutionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
