package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLogGroupXAmzTargetEnum string

const (
	DeleteLogGroupXAmzTargetEnumLogs20140328DeleteLogGroup DeleteLogGroupXAmzTargetEnum = "Logs_20140328.DeleteLogGroup"
)

type DeleteLogGroupHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLogGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteLogGroupRequest struct {
	Headers DeleteLogGroupHeaders
	Request shared.DeleteLogGroupRequest `request:"mediaType=application/json"`
}

type DeleteLogGroupResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	OperationAbortedException   *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
