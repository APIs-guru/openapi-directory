package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetChannelRequestBody struct {
	Arn string `json:"arn"`
}

type GetChannelRequest struct {
	Headers GetChannelHeaders
	Request GetChannelRequestBody `request:"mediaType=application/json"`
}

type GetChannelResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetChannelResponse        *shared.GetChannelResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
