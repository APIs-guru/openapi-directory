package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLogGroupXAmzTargetEnum string

const (
	CreateLogGroupXAmzTargetEnumLogs20140328CreateLogGroup CreateLogGroupXAmzTargetEnum = "Logs_20140328.CreateLogGroup"
)

type CreateLogGroupHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLogGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateLogGroupRequest struct {
	Headers CreateLogGroupHeaders
	Request shared.CreateLogGroupRequest `request:"mediaType=application/json"`
}

type CreateLogGroupResponse struct {
	ContentType                    string
	InvalidParameterException      *interface{}
	LimitExceededException         *interface{}
	OperationAbortedException      *interface{}
	ResourceAlreadyExistsException *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
