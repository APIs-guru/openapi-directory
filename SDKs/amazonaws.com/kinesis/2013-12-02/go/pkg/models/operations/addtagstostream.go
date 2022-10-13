package operations

import (
	"openapi/pkg/models/shared"
)

type AddTagsToStreamXAmzTargetEnum string

const (
	AddTagsToStreamXAmzTargetEnumKinesis20131202AddTagsToStream AddTagsToStreamXAmzTargetEnum = "Kinesis_20131202.AddTagsToStream"
)

type AddTagsToStreamHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AddTagsToStreamXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AddTagsToStreamRequest struct {
	Headers AddTagsToStreamHeaders
	Request shared.AddTagsToStreamInput `request:"mediaType=application/json"`
}

type AddTagsToStreamResponse struct {
	ContentType               string
	InvalidArgumentException  *interface{}
	LimitExceededException    *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
