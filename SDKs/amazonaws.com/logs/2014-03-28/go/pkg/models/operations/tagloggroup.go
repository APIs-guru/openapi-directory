package operations

import (
	"openapi/pkg/models/shared"
)

type TagLogGroupXAmzTargetEnum string

const (
	TagLogGroupXAmzTargetEnumLogs20140328TagLogGroup TagLogGroupXAmzTargetEnum = "Logs_20140328.TagLogGroup"
)

type TagLogGroupHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TagLogGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TagLogGroupRequest struct {
	Headers TagLogGroupHeaders
	Request shared.TagLogGroupRequest `request:"mediaType=application/json"`
}

type TagLogGroupResponse struct {
	ContentType               string
	InvalidParameterException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
