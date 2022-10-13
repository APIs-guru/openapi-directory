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
	CallInstructionsMessage *shared.CallInstructionsMessageType `json:"CallInstructionsMessage"`
	PlainTextMessage        *shared.PlainTextMessageType        `json:"PlainTextMessage"`
	SsmlMessage             *shared.SsmlMessageType             `json:"SSMLMessage"`
}

type SendVoiceMessageRequestBody struct {
	CallerID               *string                             `json:"CallerId"`
	ConfigurationSetName   *string                             `json:"ConfigurationSetName"`
	Content                *SendVoiceMessageRequestBodyContent `json:"Content"`
	DestinationPhoneNumber *string                             `json:"DestinationPhoneNumber"`
	OriginationPhoneNumber *string                             `json:"OriginationPhoneNumber"`
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
