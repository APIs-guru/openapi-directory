package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateChannelRequestBodyLatencyModeEnum string

const (
	UpdateChannelRequestBodyLatencyModeEnumNormal UpdateChannelRequestBodyLatencyModeEnum = "NORMAL"
	UpdateChannelRequestBodyLatencyModeEnumLow    UpdateChannelRequestBodyLatencyModeEnum = "LOW"
)

type UpdateChannelRequestBodyTypeEnum string

const (
	UpdateChannelRequestBodyTypeEnumBasic    UpdateChannelRequestBodyTypeEnum = "BASIC"
	UpdateChannelRequestBodyTypeEnumStandard UpdateChannelRequestBodyTypeEnum = "STANDARD"
)

type UpdateChannelRequestBody struct {
	Arn                       string                                   `json:"arn"`
	Authorized                *bool                                    `json:"authorized,omitempty"`
	LatencyMode               *UpdateChannelRequestBodyLatencyModeEnum `json:"latencyMode,omitempty"`
	Name                      *string                                  `json:"name,omitempty"`
	RecordingConfigurationArn *string                                  `json:"recordingConfigurationArn,omitempty"`
	Type                      *UpdateChannelRequestBodyTypeEnum        `json:"type,omitempty"`
}

type UpdateChannelRequest struct {
	Headers UpdateChannelHeaders
	Request UpdateChannelRequestBody `request:"mediaType=application/json"`
}

type UpdateChannelResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	PendingVerification       *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateChannelResponse     *shared.UpdateChannelResponse
	ValidationException       *interface{}
}
