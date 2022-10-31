package operations

import (
	"openapi/pkg/models/shared"
)

type GetSignalingChannelEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration struct {
	Protocols []shared.ChannelProtocolEnum `json:"Protocols,omitempty"`
	Role      *shared.ChannelRoleEnum      `json:"Role,omitempty"`
}

type GetSignalingChannelEndpointRequestBody struct {
	ChannelArn                               string                                                                          `json:"ChannelARN"`
	SingleMasterChannelEndpointConfiguration *GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration `json:"SingleMasterChannelEndpointConfiguration,omitempty"`
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
