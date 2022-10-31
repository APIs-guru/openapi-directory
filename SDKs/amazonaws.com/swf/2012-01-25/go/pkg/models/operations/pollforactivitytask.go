package operations

import (
	"openapi/pkg/models/shared"
)

type PollForActivityTaskXAmzTargetEnum string

const (
	PollForActivityTaskXAmzTargetEnumSimpleWorkflowServicePollForActivityTask PollForActivityTaskXAmzTargetEnum = "SimpleWorkflowService.PollForActivityTask"
)

type PollForActivityTaskHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PollForActivityTaskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
