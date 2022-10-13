package operations

import (
	"openapi/pkg/models/shared"
)

type RecordActivityTaskHeartbeatXAmzTargetEnum string

const (
	RecordActivityTaskHeartbeatXAmzTargetEnumSimpleWorkflowServiceRecordActivityTaskHeartbeat RecordActivityTaskHeartbeatXAmzTargetEnum = "SimpleWorkflowService.RecordActivityTaskHeartbeat"
)

type RecordActivityTaskHeartbeatHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RecordActivityTaskHeartbeatXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RecordActivityTaskHeartbeatRequest struct {
	Headers RecordActivityTaskHeartbeatHeaders
	Request shared.RecordActivityTaskHeartbeatInput `request:"mediaType=application/json"`
}

type RecordActivityTaskHeartbeatResponse struct {
	ActivityTaskStatus         *shared.ActivityTaskStatus
	ContentType                string
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
}
