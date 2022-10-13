package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveTagsFromStreamXAmzTargetEnum string

const (
	RemoveTagsFromStreamXAmzTargetEnumKinesis20131202RemoveTagsFromStream RemoveTagsFromStreamXAmzTargetEnum = "Kinesis_20131202.RemoveTagsFromStream"
)

type RemoveTagsFromStreamHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveTagsFromStreamXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RemoveTagsFromStreamRequest struct {
	Headers RemoveTagsFromStreamHeaders
	Request shared.RemoveTagsFromStreamInput `request:"mediaType=application/json"`
}

type RemoveTagsFromStreamResponse struct {
	ContentType               string
	InvalidArgumentException  *interface{}
	LimitExceededException    *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
