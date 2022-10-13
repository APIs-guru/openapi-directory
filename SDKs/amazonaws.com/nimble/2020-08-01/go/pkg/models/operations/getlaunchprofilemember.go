package operations

import (
	"openapi/pkg/models/shared"
)

type GetLaunchProfileMemberPathParams struct {
	LaunchProfileID string `pathParam:"style=simple,explode=false,name=launchProfileId"`
	PrincipalID     string `pathParam:"style=simple,explode=false,name=principalId"`
	StudioID        string `pathParam:"style=simple,explode=false,name=studioId"`
}

type GetLaunchProfileMemberHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetLaunchProfileMemberRequest struct {
	PathParams GetLaunchProfileMemberPathParams
	Headers    GetLaunchProfileMemberHeaders
}

type GetLaunchProfileMemberResponse struct {
	AccessDeniedException          *interface{}
	ConflictException              *interface{}
	ContentType                    string
	GetLaunchProfileMemberResponse *shared.GetLaunchProfileMemberResponse
	InternalServerErrorException   *interface{}
	ResourceNotFoundException      *interface{}
	ServiceQuotaExceededException  *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	ValidationException            *interface{}
}
