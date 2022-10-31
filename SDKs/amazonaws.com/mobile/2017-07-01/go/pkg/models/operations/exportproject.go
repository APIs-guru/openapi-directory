package operations

import (
	"openapi/pkg/models/shared"
)

type ExportProjectPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type ExportProjectHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ExportProjectRequest struct {
	PathParams ExportProjectPathParams
	Headers    ExportProjectHeaders
}

type ExportProjectResponse struct {
	BadRequestException         *shared.BadRequestException
	ContentType                 string
	ExportProjectResult         *shared.ExportProjectResult
	InternalFailureException    *shared.InternalFailureException
	NotFoundException           *shared.NotFoundException
	ServiceUnavailableException *shared.ServiceUnavailableException
	StatusCode                  int64
	TooManyRequestsException    *shared.TooManyRequestsException
	UnauthorizedException       *shared.UnauthorizedException
}
