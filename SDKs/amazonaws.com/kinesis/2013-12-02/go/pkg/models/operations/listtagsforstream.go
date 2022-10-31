package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForStreamXAmzTargetEnum string

const (
	ListTagsForStreamXAmzTargetEnumKinesis20131202ListTagsForStream ListTagsForStreamXAmzTargetEnum = "Kinesis_20131202.ListTagsForStream"
)

type ListTagsForStreamHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTagsForStreamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
