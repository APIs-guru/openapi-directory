package operations

import (
	"openapi/pkg/models/shared"
)

type SendAlexaOfferToMasterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
