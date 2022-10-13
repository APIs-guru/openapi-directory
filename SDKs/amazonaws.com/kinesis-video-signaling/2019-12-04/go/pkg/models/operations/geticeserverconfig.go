package operations

import (
	"openapi/pkg/models/shared"
)

type GetIceServerConfigHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetIceServerConfigRequestBodyServiceEnum string

const (
	GetIceServerConfigRequestBodyServiceEnumTurn GetIceServerConfigRequestBodyServiceEnum = "TURN"
)

type GetIceServerConfigRequestBody struct {
	ChannelArn string                                    `json:"ChannelARN"`
	ClientID   *string                                   `json:"ClientId"`
	Service    *GetIceServerConfigRequestBodyServiceEnum `json:"Service"`
	Username   *string                                   `json:"Username"`
}

type GetIceServerConfigRequest struct {
	Headers GetIceServerConfigHeaders
	Request GetIceServerConfigRequestBody `request:"mediaType=application/json"`
}

type GetIceServerConfigResponse struct {
	ClientLimitExceededException *interface{}
	ContentType                  string
	GetIceServerConfigResponse   *shared.GetIceServerConfigResponse
	InvalidArgumentException     *interface{}
	InvalidClientException       *interface{}
	NotAuthorizedException       *interface{}
	ResourceNotFoundException    *interface{}
	SessionExpiredException      *interface{}
	StatusCode                   int64
}
