package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLogGroupXAmzTargetEnum string

const (
	DeleteLogGroupXAmzTargetEnumLogs20140328DeleteLogGroup DeleteLogGroupXAmzTargetEnum = "Logs_20140328.DeleteLogGroup"
)

type DeleteLogGroupHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLogGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
