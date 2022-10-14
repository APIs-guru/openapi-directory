package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSignalingChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateSignalingChannelRequestBodyChannelTypeEnum string

const (
	CreateSignalingChannelRequestBodyChannelTypeEnumSingleMaster CreateSignalingChannelRequestBodyChannelTypeEnum = "SINGLE_MASTER"
)

type CreateSignalingChannelRequestBodySingleMasterConfiguration struct {
	MessageTTLSeconds *int64 `json:"MessageTtlSeconds,omitempty"`
}

type CreateSignalingChannelRequestBody struct {
	ChannelName               string                                                      `json:"ChannelName"`
	ChannelType               *CreateSignalingChannelRequestBodyChannelTypeEnum           `json:"ChannelType,omitempty"`
	SingleMasterConfiguration *CreateSignalingChannelRequestBodySingleMasterConfiguration `json:"SingleMasterConfiguration,omitempty"`
	Tags                      []shared.Tag                                                `json:"Tags,omitempty"`
}

type CreateSignalingChannelRequest struct {
	Headers CreateSignalingChannelHeaders
	Request CreateSignalingChannelRequestBody `request:"mediaType=application/json"`
}

type CreateSignalingChannelResponse struct {
	AccessDeniedException                 *interface{}
	AccountChannelLimitExceededException  *interface{}
	ClientLimitExceededException          *interface{}
	ContentType                           string
	CreateSignalingChannelOutput          *shared.CreateSignalingChannelOutput
	InvalidArgumentException              *interface{}
	ResourceInUseException                *interface{}
	StatusCode                            int64
	TagsPerResourceExceededLimitException *interface{}
}
