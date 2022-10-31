package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLaunchProfilePathParams struct {
	StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
}

type CreateLaunchProfileHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"style=simple,explode=false,name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateLaunchProfileRequestBodyStreamConfiguration struct {
	ClipboardMode             *shared.StreamingClipboardModeEnum `json:"clipboardMode,omitempty"`
	Ec2InstanceTypes          []shared.StreamingInstanceTypeEnum `json:"ec2InstanceTypes,omitempty"`
	MaxSessionLengthInMinutes *int64                             `json:"maxSessionLengthInMinutes,omitempty"`
	StreamingImageIds         []string                           `json:"streamingImageIds,omitempty"`
}

type CreateLaunchProfileRequestBody struct {
	Description                   *string                                           `json:"description,omitempty"`
	Ec2SubnetIds                  []string                                          `json:"ec2SubnetIds"`
	LaunchProfileProtocolVersions []string                                          `json:"launchProfileProtocolVersions"`
	Name                          string                                            `json:"name"`
	StreamConfiguration           CreateLaunchProfileRequestBodyStreamConfiguration `json:"streamConfiguration"`
	StudioComponentIds            []string                                          `json:"studioComponentIds"`
	Tags                          map[string]string                                 `json:"tags,omitempty"`
}

type CreateLaunchProfileRequest struct {
	PathParams CreateLaunchProfilePathParams
	Headers    CreateLaunchProfileHeaders
	Request    CreateLaunchProfileRequestBody `request:"mediaType=application/json"`
}

type CreateLaunchProfileResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateLaunchProfileResponse   *shared.CreateLaunchProfileResponse
	InternalServerErrorException  *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
