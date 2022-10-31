package operations

import (
	"openapi/pkg/models/shared"
)

type RecordActivityTaskHeartbeatXAmzTargetEnum string

const (
	RecordActivityTaskHeartbeatXAmzTargetEnumSimpleWorkflowServiceRecordActivityTaskHeartbeat RecordActivityTaskHeartbeatXAmzTargetEnum = "SimpleWorkflowService.RecordActivityTaskHeartbeat"
)

type RecordActivityTaskHeartbeatHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RecordActivityTaskHeartbeatXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
