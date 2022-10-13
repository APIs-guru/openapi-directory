package operations

type DeleteLaunchProfileMemberPathParams struct {
	LaunchProfileID string `pathParam:"style=simple,explode=false,name=launchProfileId"`
	PrincipalID     string `pathParam:"style=simple,explode=false,name=principalId"`
	StudioID        string `pathParam:"style=simple,explode=false,name=studioId"`
}

type DeleteLaunchProfileMemberHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteLaunchProfileMemberRequest struct {
	PathParams DeleteLaunchProfileMemberPathParams
	Headers    DeleteLaunchProfileMemberHeaders
}

type DeleteLaunchProfileMemberResponse struct {
	AccessDeniedException             *interface{}
	ConflictException                 *interface{}
	ContentType                       string
	DeleteLaunchProfileMemberResponse map[string]interface{}
	InternalServerErrorException      *interface{}
	ResourceNotFoundException         *interface{}
	ServiceQuotaExceededException     *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	ValidationException               *interface{}
}
