package operations

import (
	"openapi/pkg/models/shared"
)

type GetLaunchProfileDetailsPathParams struct {
	LaunchProfileID string `pathParam:"style=simple,explode=false,name=launchProfileId"`
	StudioID        string `pathParam:"style=simple,explode=false,name=studioId"`
}

type GetLaunchProfileDetailsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetLaunchProfileDetailsRequest struct {
	PathParams GetLaunchProfileDetailsPathParams
	Headers    GetLaunchProfileDetailsHeaders
}

type GetLaunchProfileDetailsResponse struct {
	AccessDeniedException           *interface{}
	ConflictException               *interface{}
	ContentType                     string
	GetLaunchProfileDetailsResponse *shared.GetLaunchProfileDetailsResponse
	InternalServerErrorException    *interface{}
	ResourceNotFoundException       *interface{}
	ServiceQuotaExceededException   *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	ValidationException             *interface{}
}
