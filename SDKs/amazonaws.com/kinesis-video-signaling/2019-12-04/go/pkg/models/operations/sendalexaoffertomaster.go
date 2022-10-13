package operations

import (
	"openapi/pkg/models/shared"
)

type SendAlexaOfferToMasterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SendAlexaOfferToMasterRequestBody struct {
	ChannelArn     string `json:"ChannelARN"`
	MessagePayload string `json:"MessagePayload"`
	SenderClientID string `json:"SenderClientId"`
}

type SendAlexaOfferToMasterRequest struct {
	Headers SendAlexaOfferToMasterHeaders
	Request SendAlexaOfferToMasterRequestBody `request:"mediaType=application/json"`
}

type SendAlexaOfferToMasterResponse struct {
	ClientLimitExceededException   *interface{}
	ContentType                    string
	InvalidArgumentException       *interface{}
	NotAuthorizedException         *interface{}
	ResourceNotFoundException      *interface{}
	SendAlexaOfferToMasterResponse *shared.SendAlexaOfferToMasterResponse
	StatusCode                     int64
}
