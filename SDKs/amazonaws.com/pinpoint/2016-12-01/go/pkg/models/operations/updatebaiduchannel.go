package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBaiduChannelPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type UpdateBaiduChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateBaiduChannelRequestBodyBaiduChannelRequest struct {
	APIKey    *string `json:"ApiKey,omitempty"`
	Enabled   *bool   `json:"Enabled,omitempty"`
	SecretKey *string `json:"SecretKey,omitempty"`
}

type UpdateBaiduChannelRequestBody struct {
	BaiduChannelRequest UpdateBaiduChannelRequestBodyBaiduChannelRequest `json:"BaiduChannelRequest"`
}

type UpdateBaiduChannelRequest struct {
	PathParams UpdateBaiduChannelPathParams
	Headers    UpdateBaiduChannelHeaders
	Request    UpdateBaiduChannelRequestBody `request:"mediaType=application/json"`
}

type UpdateBaiduChannelResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateBaiduChannelResponse   *shared.UpdateBaiduChannelResponse
}
