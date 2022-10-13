package operations

import (
	"openapi/pkg/models/shared"
)

type ListResourceTagsXAmzTargetEnum string

const (
	ListResourceTagsXAmzTargetEnumTrentServiceListResourceTags ListResourceTagsXAmzTargetEnum = "TrentService.ListResourceTags"
)

type ListResourceTagsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListResourceTagsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListResourceTagsRequest struct {
	Headers ListResourceTagsHeaders
	Request shared.ListResourceTagsRequest `request:"mediaType=application/json"`
}

type ListResourceTagsResponse struct {
	ContentType              string
	InvalidArnException      *interface{}
	InvalidMarkerException   *interface{}
	KmsInternalException     *interface{}
	ListResourceTagsResponse *shared.ListResourceTagsResponse
	NotFoundException        *interface{}
	StatusCode               int64
}
