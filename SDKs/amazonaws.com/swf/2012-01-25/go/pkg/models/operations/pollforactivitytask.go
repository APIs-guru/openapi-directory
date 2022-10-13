package operations

import (
	"openapi/pkg/models/shared"
)

type PollForActivityTaskXAmzTargetEnum string

const (
	PollForActivityTaskXAmzTargetEnumSimpleWorkflowServicePollForActivityTask PollForActivityTaskXAmzTargetEnum = "SimpleWorkflowService.PollForActivityTask"
)

type PollForActivityTaskHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PollForActivityTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PollForActivityTaskRequest struct {
	Headers PollForActivityTaskHeaders
	Request shared.PollForActivityTaskInput `request:"mediaType=application/json"`
}

type PollForActivityTaskResponse struct {
	ActivityTask               *shared.ActivityTask
	ContentType                string
	LimitExceededFault         *interface{}
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
}
