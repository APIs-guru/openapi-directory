package operations

import (
	"openapi/pkg/models/shared"
)

type SendVoiceMessageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SendVoiceMessageRequestBodyContent struct {
	CallInstructionsMessage *shared.CallInstructionsMessageType `json:"CallInstructionsMessage,omitempty"`
	PlainTextMessage        *shared.PlainTextMessageType        `json:"PlainTextMessage,omitempty"`
	SsmlMessage             *shared.SsmlMessageType             `json:"SSMLMessage,omitempty"`
}

type SendVoiceMessageRequestBody struct {
	CallerID               *string                             `json:"CallerId,omitempty"`
	ConfigurationSetName   *string                             `json:"ConfigurationSetName,omitempty"`
	Content                *SendVoiceMessageRequestBodyContent `json:"Content,omitempty"`
	DestinationPhoneNumber *string                             `json:"DestinationPhoneNumber,omitempty"`
	OriginationPhoneNumber *string                             `json:"OriginationPhoneNumber,omitempty"`
}

type SendVoiceMessageRequest struct {
	Headers SendVoiceMessageHeaders
	Request SendVoiceMessageRequestBody `request:"mediaType=application/json"`
}

type SendVoiceMessageResponse struct {
	BadRequestException           *interface{}
	ContentType                   string
	InternalServiceErrorException *interface{}
	SendVoiceMessageResponse      *shared.SendVoiceMessageResponse
	StatusCode                    int64
	TooManyRequestsException      *interface{}
}
