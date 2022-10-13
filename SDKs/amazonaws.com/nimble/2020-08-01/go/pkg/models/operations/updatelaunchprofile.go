package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLaunchProfilePathParams struct {
	LaunchProfileID string `pathParam:"style=simple,explode=false,name=launchProfileId"`
	StudioID        string `pathParam:"style=simple,explode=false,name=studioId"`
}

type UpdateLaunchProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateLaunchProfileRequestBodyStreamConfiguration struct {
	ClipboardMode             *shared.StreamingClipboardModeEnum `json:"clipboardMode"`
	Ec2InstanceTypes          []shared.StreamingInstanceTypeEnum `json:"ec2InstanceTypes"`
	MaxSessionLengthInMinutes *int64                             `json:"maxSessionLengthInMinutes"`
	StreamingImageIds         []string                           `json:"streamingImageIds"`
}

type UpdateLaunchProfileRequestBody struct {
	Description                   *string                                            `json:"description"`
	LaunchProfileProtocolVersions []string                                           `json:"launchProfileProtocolVersions"`
	Name                          *string                                            `json:"name"`
	StreamConfiguration           *UpdateLaunchProfileRequestBodyStreamConfiguration `json:"streamConfiguration"`
	StudioComponentIds            []string                                           `json:"studioComponentIds"`
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
