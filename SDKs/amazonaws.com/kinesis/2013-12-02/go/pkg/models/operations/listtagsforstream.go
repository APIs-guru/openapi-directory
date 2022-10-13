package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForStreamXAmzTargetEnum string

const (
	ListTagsForStreamXAmzTargetEnumKinesis20131202ListTagsForStream ListTagsForStreamXAmzTargetEnum = "Kinesis_20131202.ListTagsForStream"
)

type ListTagsForStreamHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTagsForStreamXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTagsForStreamRequest struct {
	Headers ListTagsForStreamHeaders
	Request shared.ListTagsForStreamInput `request:"mediaType=application/json"`
}

type ListTagsForStreamResponse struct {
	ContentType               string
	InvalidArgumentException  *interface{}
	LimitExceededException    *interface{}
	ListTagsForStreamOutput   *shared.ListTagsForStreamOutput
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
