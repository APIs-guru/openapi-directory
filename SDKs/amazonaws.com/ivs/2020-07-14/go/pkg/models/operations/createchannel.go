package operations

import (
	"openapi/pkg/models/shared"
)

type CreateChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateChannelRequestBodyLatencyModeEnum string

const (
	CreateChannelRequestBodyLatencyModeEnumNormal CreateChannelRequestBodyLatencyModeEnum = "NORMAL"
	CreateChannelRequestBodyLatencyModeEnumLow    CreateChannelRequestBodyLatencyModeEnum = "LOW"
)

type CreateChannelRequestBodyTypeEnum string

const (
	CreateChannelRequestBodyTypeEnumBasic    CreateChannelRequestBodyTypeEnum = "BASIC"
	CreateChannelRequestBodyTypeEnumStandard CreateChannelRequestBodyTypeEnum = "STANDARD"
)

type CreateChannelRequestBody struct {
	Authorized                *bool                                    `json:"authorized,omitempty"`
	LatencyMode               *CreateChannelRequestBodyLatencyModeEnum `json:"latencyMode,omitempty"`
	Name                      *string                                  `json:"name,omitempty"`
	RecordingConfigurationArn *string                                  `json:"recordingConfigurationArn,omitempty"`
	Tags                      map[string]string                        `json:"tags,omitempty"`
	Type                      *CreateChannelRequestBodyTypeEnum        `json:"type,omitempty"`
}

type CreateChannelRequest struct {
	Headers CreateChannelHeaders
	Request CreateChannelRequestBody `request:"mediaType=application/json"`
}

type CreateChannelResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	CreateChannelResponse         *shared.CreateChannelResponse
	PendingVerification           *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ValidationException           *interface{}
}
