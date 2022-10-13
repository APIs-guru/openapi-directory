package operations

import (
	"openapi/pkg/models/shared"
)

type SendTaskHeartbeatXAmzTargetEnum string

const (
	SendTaskHeartbeatXAmzTargetEnumAwsStepFunctionsSendTaskHeartbeat SendTaskHeartbeatXAmzTargetEnum = "AWSStepFunctions.SendTaskHeartbeat"
)

type SendTaskHeartbeatHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SendTaskHeartbeatXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SendTaskHeartbeatRequest struct {
	Headers SendTaskHeartbeatHeaders
	Request shared.SendTaskHeartbeatInput `request:"mediaType=application/json"`
}

type SendTaskHeartbeatResponse struct {
	ContentType             string
	InvalidToken            *interface{}
	SendTaskHeartbeatOutput map[string]interface{}
	StatusCode              int64
	TaskDoesNotExist        *interface{}
	TaskTimedOut            *interface{}
}
