package operations

import (
	"openapi/pkg/models/shared"
)

type GetStreamHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
