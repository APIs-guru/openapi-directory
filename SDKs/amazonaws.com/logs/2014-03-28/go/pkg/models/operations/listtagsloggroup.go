package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsLogGroupXAmzTargetEnum string

const (
	ListTagsLogGroupXAmzTargetEnumLogs20140328ListTagsLogGroup ListTagsLogGroupXAmzTargetEnum = "Logs_20140328.ListTagsLogGroup"
)

type ListTagsLogGroupHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTagsLogGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTagsLogGroupRequest struct {
	Headers ListTagsLogGroupHeaders
	Request shared.ListTagsLogGroupRequest `request:"mediaType=application/json"`
}

type ListTagsLogGroupResponse struct {
	ContentType                 string
	ListTagsLogGroupResponse    *shared.ListTagsLogGroupResponse
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
