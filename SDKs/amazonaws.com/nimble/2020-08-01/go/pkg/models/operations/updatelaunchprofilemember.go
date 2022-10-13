package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLaunchProfileMemberPathParams struct {
	LaunchProfileID string `pathParam:"style=simple,explode=false,name=launchProfileId"`
	PrincipalID     string `pathParam:"style=simple,explode=false,name=principalId"`
	StudioID        string `pathParam:"style=simple,explode=false,name=studioId"`
}

type UpdateLaunchProfileMemberHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateLaunchProfileMemberRequestBodyPersonaEnum string

const (
	UpdateLaunchProfileMemberRequestBodyPersonaEnumUser UpdateLaunchProfileMemberRequestBodyPersonaEnum = "USER"
)

type UpdateLaunchProfileMemberRequestBody struct {
	Persona UpdateLaunchProfileMemberRequestBodyPersonaEnum `json:"persona"`
}

type UpdateLaunchProfileMemberRequest struct {
	PathParams UpdateLaunchProfileMemberPathParams
	Headers    UpdateLaunchProfileMemberHeaders
	Request    UpdateLaunchProfileMemberRequestBody `request:"mediaType=application/json"`
}

type UpdateLaunchProfileMemberResponse struct {
	AccessDeniedException             *interface{}
	ConflictException                 *interface{}
	ContentType                       string
	InternalServerErrorException      *interface{}
	ResourceNotFoundException         *interface{}
	ServiceQuotaExceededException     *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	UpdateLaunchProfileMemberResponse *shared.UpdateLaunchProfileMemberResponse
	ValidationException               *interface{}
}
