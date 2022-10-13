package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProjectPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DeleteProjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteProjectRequest struct {
	PathParams DeleteProjectPathParams
	Headers    DeleteProjectHeaders
}

type DeleteProjectResponse struct {
	ContentType                 string
	DeleteProjectResult         *shared.DeleteProjectResult
	InternalFailureException    *shared.InternalFailureException
	NotFoundException           *shared.NotFoundException
	ServiceUnavailableException *shared.ServiceUnavailableException
	StatusCode                  int64
	TooManyRequestsException    *shared.TooManyRequestsException
	UnauthorizedException       *shared.UnauthorizedException
}
