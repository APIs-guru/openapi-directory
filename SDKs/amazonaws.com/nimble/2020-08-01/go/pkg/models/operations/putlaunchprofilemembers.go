package operations

import (
	"openapi/pkg/models/shared"
)

type PutLaunchProfileMembersPathParams struct {
	LaunchProfileID string `pathParam:"style=simple,explode=false,name=launchProfileId"`
	StudioID        string `pathParam:"style=simple,explode=false,name=studioId"`
}

type PutLaunchProfileMembersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutLaunchProfileMembersRequestBody struct {
	IdentityStoreID string                          `json:"identityStoreId"`
	Members         []shared.NewLaunchProfileMember `json:"members"`
}

type PutLaunchProfileMembersRequest struct {
	PathParams PutLaunchProfileMembersPathParams
	Headers    PutLaunchProfileMembersHeaders
	Request    PutLaunchProfileMembersRequestBody `request:"mediaType=application/json"`
}

type PutLaunchProfileMembersResponse struct {
	AccessDeniedException           *interface{}
	ConflictException               *interface{}
	ContentType                     string
	InternalServerErrorException    *interface{}
	PutLaunchProfileMembersResponse map[string]interface{}
	ResourceNotFoundException       *interface{}
	ServiceQuotaExceededException   *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	ValidationException             *interface{}
}
