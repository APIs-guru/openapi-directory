package operations

import (
	"openapi/pkg/models/shared"
)

type GetLaunchProfileInitializationPathParams struct {
	LaunchProfileID string `pathParam:"style=simple,explode=false,name=launchProfileId"`
	StudioID        string `pathParam:"style=simple,explode=false,name=studioId"`
}

type GetLaunchProfileInitializationQueryParams struct {
	LaunchProfileProtocolVersions []string `queryParam:"style=form,explode=true,name=launchProfileProtocolVersions"`
	LaunchPurpose                 string   `queryParam:"style=form,explode=true,name=launchPurpose"`
	Platform                      string   `queryParam:"style=form,explode=true,name=platform"`
}

type GetLaunchProfileInitializationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetLaunchProfileInitializationRequest struct {
	PathParams  GetLaunchProfileInitializationPathParams
	QueryParams GetLaunchProfileInitializationQueryParams
	Headers     GetLaunchProfileInitializationHeaders
}

type GetLaunchProfileInitializationResponse struct {
	AccessDeniedException                  *interface{}
	ConflictException                      *interface{}
	ContentType                            string
	GetLaunchProfileInitializationResponse *shared.GetLaunchProfileInitializationResponse
	InternalServerErrorException           *interface{}
	ResourceNotFoundException              *interface{}
	ServiceQuotaExceededException          *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
	ValidationException                    *interface{}
}
