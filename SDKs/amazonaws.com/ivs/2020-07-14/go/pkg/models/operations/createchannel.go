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
	Authorized                *bool                                    `json:"authorized"`
	LatencyMode               *CreateChannelRequestBodyLatencyModeEnum `json:"latencyMode"`
	Name                      *string                                  `json:"name"`
	RecordingConfigurationArn *string                                  `json:"recordingConfigurationArn"`
	Tags                      map[string]string                        `json:"tags"`
	Type                      *CreateChannelRequestBodyTypeEnum        `json:"type"`
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
