package operations

import (
	"openapi/pkg/models/shared"
)

type SendCommandXAmzTargetEnum string

const (
	SendCommandXAmzTargetEnumQldbSessionSendCommand SendCommandXAmzTargetEnum = "QLDBSession.SendCommand"
)

type SendCommandHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SendCommandXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SendCommandRequest struct {
	Headers SendCommandHeaders
	Request shared.SendCommandRequest `request:"mediaType=application/json"`
}

type SendCommandResponse struct {
	BadRequestException       *interface{}
	CapacityExceededException *interface{}
	ContentType               string
	InvalidSessionException   *interface{}
	LimitExceededException    *interface{}
	OccConflictException      *interface{}
	RateExceededException     *interface{}
	SendCommandResult         *shared.SendCommandResult
	StatusCode                int64
}
