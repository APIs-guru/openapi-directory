package operations

import (
	"openapi/pkg/models/shared"
)

type GetStreamHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetStreamRequestBody struct {
	ChannelArn string `json:"channelArn"`
}

type GetStreamRequest struct {
	Headers GetStreamHeaders
	Request GetStreamRequestBody `request:"mediaType=application/json"`
}

type GetStreamResponse struct {
	AccessDeniedException     *interface{}
	ChannelNotBroadcasting    *interface{}
	ContentType               string
	GetStreamResponse         *shared.GetStreamResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
