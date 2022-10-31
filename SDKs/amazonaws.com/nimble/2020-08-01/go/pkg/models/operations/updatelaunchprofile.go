package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLaunchProfilePathParams struct {
	LaunchProfileID string `pathParam:"style=simple,explode=false,name=launchProfileId"`
	StudioID        string `pathParam:"style=simple,explode=false,name=studioId"`
}

type UpdateLaunchProfileHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"style=simple,explode=false,name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateLaunchProfileRequestBodyStreamConfiguration struct {
	ClipboardMode             *shared.StreamingClipboardModeEnum `json:"clipboardMode,omitempty"`
	Ec2InstanceTypes          []shared.StreamingInstanceTypeEnum `json:"ec2InstanceTypes,omitempty"`
	MaxSessionLengthInMinutes *int64                             `json:"maxSessionLengthInMinutes,omitempty"`
	StreamingImageIds         []string                           `json:"streamingImageIds,omitempty"`
}

type UpdateLaunchProfileRequestBody struct {
	Description                   *string                                            `json:"description,omitempty"`
	LaunchProfileProtocolVersions []string                                           `json:"launchProfileProtocolVersions,omitempty"`
	Name                          *string                                            `json:"name,omitempty"`
	StreamConfiguration           *UpdateLaunchProfileRequestBodyStreamConfiguration `json:"streamConfiguration,omitempty"`
	StudioComponentIds            []string                                           `json:"studioComponentIds,omitempty"`
}

type UpdateLaunchProfileRequest struct {
	PathParams UpdateLaunchProfilePathParams
	Headers    UpdateLaunchProfileHeaders
	Request    UpdateLaunchProfileRequestBody `request:"mediaType=application/json"`
}

type UpdateLaunchProfileResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerErrorException  *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateLaunchProfileResponse   *shared.UpdateLaunchProfileResponse
	ValidationException           *interface{}
}
