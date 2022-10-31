package operations

import (
	"openapi/pkg/models/shared"
)

type UntagLogGroupXAmzTargetEnum string

const (
	UntagLogGroupXAmzTargetEnumLogs20140328UntagLogGroup UntagLogGroupXAmzTargetEnum = "Logs_20140328.UntagLogGroup"
)

type UntagLogGroupHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UntagLogGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UntagLogGroupRequest struct {
	Headers UntagLogGroupHeaders
	Request shared.UntagLogGroupRequest `request:"mediaType=application/json"`
}

type UntagLogGroupResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
