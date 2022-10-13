package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProjectQueryParams struct {
	Name       *string `queryParam:"style=form,explode=true,name=name"`
	Region     *string `queryParam:"style=form,explode=true,name=region"`
	SnapshotID *string `queryParam:"style=form,explode=true,name=snapshotId"`
}

type CreateProjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateProjectRequestBody struct {
	Contents *string `json:"contents"`
}

type CreateProjectRequest struct {
	QueryParams CreateProjectQueryParams
	Headers     CreateProjectHeaders
	Request     CreateProjectRequestBody `request:"mediaType=application/json"`
}

type CreateProjectResponse struct {
	BadRequestException         *shared.BadRequestException
	ContentType                 string
	CreateProjectResult         *shared.CreateProjectResult
	InternalFailureException    *shared.InternalFailureException
	LimitExceededException      *shared.LimitExceededException
	NotFoundException           *shared.NotFoundException
	ServiceUnavailableException *shared.ServiceUnavailableException
	StatusCode                  int64
	TooManyRequestsException    *shared.TooManyRequestsException
	UnauthorizedException       *shared.UnauthorizedException
}
