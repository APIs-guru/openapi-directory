package operations

import (
	"openapi/pkg/models/shared"
)

type ListLaunchProfileMembersPathParams struct {
	LaunchProfileID string `pathParam:"style=simple,explode=false,name=launchProfileId"`
	StudioID        string `pathParam:"style=simple,explode=false,name=studioId"`
}

type ListLaunchProfileMembersQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListLaunchProfileMembersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListLaunchProfileMembersRequest struct {
	PathParams  ListLaunchProfileMembersPathParams
	QueryParams ListLaunchProfileMembersQueryParams
	Headers     ListLaunchProfileMembersHeaders
}

type ListLaunchProfileMembersResponse struct {
	AccessDeniedException            *interface{}
	ConflictException                *interface{}
	ContentType                      string
	InternalServerErrorException     *interface{}
	ListLaunchProfileMembersResponse *shared.ListLaunchProfileMembersResponse
	ResourceNotFoundException        *interface{}
	ServiceQuotaExceededException    *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	ValidationException              *interface{}
}
