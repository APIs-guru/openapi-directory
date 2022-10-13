package operations

import (
	"openapi/pkg/models/shared"
)

type StartStudioSsoConfigurationRepairPathParams struct {
	StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
}

type StartStudioSsoConfigurationRepairHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartStudioSsoConfigurationRepairRequest struct {
	PathParams StartStudioSsoConfigurationRepairPathParams
	Headers    StartStudioSsoConfigurationRepairHeaders
}

type StartStudioSsoConfigurationRepairResponse struct {
	AccessDeniedException                     *interface{}
	ConflictException                         *interface{}
	ContentType                               string
	InternalServerErrorException              *interface{}
	ResourceNotFoundException                 *interface{}
	ServiceQuotaExceededException             *interface{}
	StartStudioSsoConfigurationRepairResponse *shared.StartStudioSsoConfigurationRepairResponse
	StatusCode                                int64
	ThrottlingException                       *interface{}
	ValidationException                       *interface{}
}
