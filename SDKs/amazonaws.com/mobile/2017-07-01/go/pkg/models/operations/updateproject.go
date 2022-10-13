package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProjectQueryParams struct {
	ProjectID string `queryParam:"style=form,explode=true,name=projectId"`
}

type UpdateProjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateProjectRequestBody struct {
	Contents *string `json:"contents"`
}

type UpdateProjectRequest struct {
	QueryParams UpdateProjectQueryParams
	Headers     UpdateProjectHeaders
	Request     UpdateProjectRequestBody `request:"mediaType=application/json"`
}

type UpdateProjectResponse struct {
	AccountActionRequiredException *shared.AccountActionRequiredException
	BadRequestException            *shared.BadRequestException
	ContentType                    string
	InternalFailureException       *shared.InternalFailureException
	LimitExceededException         *shared.LimitExceededException
	NotFoundException              *shared.NotFoundException
	ServiceUnavailableException    *shared.ServiceUnavailableException
	StatusCode                     int64
	TooManyRequestsException       *shared.TooManyRequestsException
	UnauthorizedException          *shared.UnauthorizedException
	UpdateProjectResult            *shared.UpdateProjectResult
}
