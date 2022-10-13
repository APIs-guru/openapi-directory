package operations

import (
	"openapi/pkg/models/shared"
)

type CountPendingActivityTasksXAmzTargetEnum string

const (
	CountPendingActivityTasksXAmzTargetEnumSimpleWorkflowServiceCountPendingActivityTasks CountPendingActivityTasksXAmzTargetEnum = "SimpleWorkflowService.CountPendingActivityTasks"
)

type CountPendingActivityTasksHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CountPendingActivityTasksXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CountPendingActivityTasksRequest struct {
	Headers CountPendingActivityTasksHeaders
	Request shared.CountPendingActivityTasksInput `request:"mediaType=application/json"`
}

type CountPendingActivityTasksResponse struct {
	ContentType                string
	OperationNotPermittedFault *interface{}
	PendingTaskCount           *shared.PendingTaskCount
	StatusCode                 int64
	UnknownResourceFault       *interface{}
}
