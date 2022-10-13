package operations

import (
	"openapi/pkg/models/shared"
)

type UntagResourceXAmzTargetEnum string

const (
	UntagResourceXAmzTargetEnumTranscribeUntagResource UntagResourceXAmzTargetEnum = "Transcribe.UntagResource"
)

type UntagResourceHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UntagResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UntagResourceRequest struct {
	Headers UntagResourceHeaders
	Request shared.UntagResourceRequest `request:"mediaType=application/json"`
}

type UntagResourceResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	UntagResourceResponse    map[string]interface{}
}
