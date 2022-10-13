package operations

import (
	"openapi/pkg/models/shared"
)

type GetFileUploadUrlxAmzTargetEnum string

const (
	GetFileUploadUrlxAmzTargetEnumMTurkRequesterServiceV20170117GetFileUploadURL GetFileUploadUrlxAmzTargetEnum = "MTurkRequesterServiceV20170117.GetFileUploadURL"
)

type GetFileUploadURLHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetFileUploadUrlxAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetFileUploadURLRequest struct {
	Headers GetFileUploadURLHeaders
	Request shared.GetFileUploadURLRequest `request:"mediaType=application/json"`
}

type GetFileUploadURLResponse struct {
	ContentType              string
	GetFileUploadURLResponse *shared.GetFileUploadURLResponse
	RequestError             *interface{}
	ServiceFault             *interface{}
	StatusCode               int64
}
