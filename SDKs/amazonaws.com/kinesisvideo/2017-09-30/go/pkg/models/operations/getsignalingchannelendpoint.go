package operations

import (
	"openapi/pkg/models/shared"
)

type GetSignalingChannelEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration struct {
	Protocols []shared.ChannelProtocolEnum `json:"Protocols"`
	Role      *shared.ChannelRoleEnum      `json:"Role"`
}

type GetSignalingChannelEndpointRequestBody struct {
	ChannelArn                               string                                                                          `json:"ChannelARN"`
	SingleMasterChannelEndpointConfiguration *GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration `json:"SingleMasterChannelEndpointConfiguration"`
}

type GetSignalingChannelEndpointRequest struct {
	Headers GetSignalingChannelEndpointHeaders
	Request GetSignalingChannelEndpointRequestBody `request:"mediaType=application/json"`
}

type GetSignalingChannelEndpointResponse struct {
	AccessDeniedException             *interface{}
	ClientLimitExceededException      *interface{}
	ContentType                       string
	GetSignalingChannelEndpointOutput *shared.GetSignalingChannelEndpointOutput
	InvalidArgumentException          *interface{}
	ResourceInUseException            *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
}
