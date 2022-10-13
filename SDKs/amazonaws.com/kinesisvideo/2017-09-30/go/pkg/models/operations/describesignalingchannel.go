package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSignalingChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeSignalingChannelRequestBody struct {
	ChannelArn  *string `json:"ChannelARN"`
	ChannelName *string `json:"ChannelName"`
}

type DescribeSignalingChannelRequest struct {
	Headers DescribeSignalingChannelHeaders
	Request DescribeSignalingChannelRequestBody `request:"mediaType=application/json"`
}

type DescribeSignalingChannelResponse struct {
	AccessDeniedException          *interface{}
	ClientLimitExceededException   *interface{}
	ContentType                    string
	DescribeSignalingChannelOutput *shared.DescribeSignalingChannelOutput
	InvalidArgumentException       *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
