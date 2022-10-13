package operations

import (
	"openapi/pkg/models/shared"
)

type CountPendingDecisionTasksXAmzTargetEnum string

const (
	CountPendingDecisionTasksXAmzTargetEnumSimpleWorkflowServiceCountPendingDecisionTasks CountPendingDecisionTasksXAmzTargetEnum = "SimpleWorkflowService.CountPendingDecisionTasks"
)

type CountPendingDecisionTasksHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CountPendingDecisionTasksXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CountPendingDecisionTasksRequest struct {
	Headers CountPendingDecisionTasksHeaders
	Request shared.CountPendingDecisionTasksInput `request:"mediaType=application/json"`
}

type CountPendingDecisionTasksResponse struct {
	ContentType                string
	OperationNotPermittedFault *interface{}
	PendingTaskCount           *shared.PendingTaskCount
	StatusCode                 int64
	UnknownResourceFault       *interface{}
}
