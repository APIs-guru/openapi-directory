package operations

import (
	"openapi/pkg/models/shared"
)

type GetDataEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDataEndpointRequestBodyAPINameEnum string

const (
	GetDataEndpointRequestBodyAPINameEnumPutMedia                   GetDataEndpointRequestBodyAPINameEnum = "PUT_MEDIA"
	GetDataEndpointRequestBodyAPINameEnumGetMedia                   GetDataEndpointRequestBodyAPINameEnum = "GET_MEDIA"
	GetDataEndpointRequestBodyAPINameEnumListFragments              GetDataEndpointRequestBodyAPINameEnum = "LIST_FRAGMENTS"
	GetDataEndpointRequestBodyAPINameEnumGetMediaForFragmentList    GetDataEndpointRequestBodyAPINameEnum = "GET_MEDIA_FOR_FRAGMENT_LIST"
	GetDataEndpointRequestBodyAPINameEnumGetHlsStreamingSessionURL  GetDataEndpointRequestBodyAPINameEnum = "GET_HLS_STREAMING_SESSION_URL"
	GetDataEndpointRequestBodyAPINameEnumGetDashStreamingSessionURL GetDataEndpointRequestBodyAPINameEnum = "GET_DASH_STREAMING_SESSION_URL"
	GetDataEndpointRequestBodyAPINameEnumGetClip                    GetDataEndpointRequestBodyAPINameEnum = "GET_CLIP"
)

type GetDataEndpointRequestBody struct {
	APIName    GetDataEndpointRequestBodyAPINameEnum `json:"APIName"`
	StreamArn  *string                               `json:"StreamARN,omitempty"`
	StreamName *string                               `json:"StreamName,omitempty"`
}

type GetDataEndpointRequest struct {
	Headers GetDataEndpointHeaders
	Request GetDataEndpointRequestBody `request:"mediaType=application/json"`
}

type GetDataEndpointResponse struct {
	ClientLimitExceededException *interface{}
	ContentType                  string
	GetDataEndpointOutput        *shared.GetDataEndpointOutput
	InvalidArgumentException     *interface{}
	NotAuthorizedException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
